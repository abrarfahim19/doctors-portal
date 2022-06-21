import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shareable/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword,eUser,eLoading,eError,] = useSignInWithEmailAndPassword(auth);
    
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        resetField,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data,e) => {
        await console.log(data.email);
        await signInWithEmailAndPassword(data.email, data.password);
        resetField("password");
    };

    if (gLoading||eLoading){
        return <Loading></Loading>
    };

    let errorM;
    if (gError || eError){
        errorM =<p className="text-red-600 mt-3">{gError?.message || eError?.message}</p>
    };

    if (gUser||eUser){
        navigate(from, { replace: true });
    }

    return (
        <div className="flex justify-center items-center">
            <div className="card w-96 flex justify-center bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <h2 className="text-xl text-center font-bold">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
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
                    {
                        errorM
                    }
                    </form>
                    <p>Don't have an account? <Link className="mt-3 text-secondary" to='/register'> Register </Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >
                        Log In with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
