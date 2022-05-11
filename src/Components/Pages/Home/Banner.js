import React from "react";
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className=" hero bg-[url('/src/assets/images/bg.png')] min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="max-w-sm rounded-lg h-full shadow-2xl" alt="Chair"
                />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn uppercase text-white bg-gradient-to-r from-secondary to-primary btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
