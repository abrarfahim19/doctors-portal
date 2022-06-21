import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    
    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const {
        register,
        handleSubmit,
        resetField,
        watch,
        formState: { errors },
    } = useForm();

    let errorM;
    if (gError || uError){
        errorM =<p className="text-red-600 mt-3">{gError?.message || uError?.message}</p>;
    };

    if (user||gUser){
        navigate('/home');
    }

    const onSubmit = async (data,e) => {
        console.log(data.email);
        const displayName = data.name;
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName })
        resetField("password");
        
    };

    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 flex justify-center bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <h2 className="text-xl text-center font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Name
                                </span>
                            </label>
                            <input
                                {...register("name", { required: true})}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.name?.type === "required" &&
                            "A Name is required"}
                                </span>
                            </label>
                            
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Email
                                </span>
                            </label>
                            <input
                                {...register("email", { required: true , pattern:/^\S+@\S+\.\S+$/})}
                                type="text"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.email?.type === "required" &&
                            "Email is required"}
                                {errors.email?.type === "pattern" &&
                            "Enter a valid Email"}
                                </span>
                            </label>

                            <label className="label">
                                <span className="label-text font-semibold">
                                    Password
                                </span>
                            </label>
                            <input
                                {...register("password", { required: true , minLength: 6})}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <span className="label-text-alt text-red-600">
                                {errors.password?.type === 'required' && "Password is required"}
                                {errors.password?.type === "minLength" &&
                            "Minmum 6 character"}
                                </span>
                            </label>
                            <input
                                type="submit"
                                className="btn text-white"
                                value="Log In"
                            />
                        </div>

                    </form>
                    {
                        errorM
                    }
                    <p>Already have an account? <Link className="mt-3 text-secondary" to='/login'> Login </Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        Sign Up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;