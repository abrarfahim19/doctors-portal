import React from "react";
import chair from '../../../assets/images/chair.png'
import PrimaryButton from "../Shareable/PrimaryButton";

const Banner = () => {
    return (
        <div className=" hero bg-[url('/src/assets/images/bg.png')] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="sm:max-w-sm lg:max-w-lg rounded-lg h-full shadow-2xl" alt="Chair"
                />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <PrimaryButton text="Get Started"></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
