import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../Shareable/PrimaryButton";

const Services = () => {
    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            image: fluoride,
            subTittle: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
        },
        {
            _id: 2,
            title: "Cavity Filling",
            image: cavity,
            subTittle: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            image: whitening,
            subTittle: " Lorem ipsum dolor, sit amet consectetur adipisicing.",
        },
    ];
    return (
        <>
            <div className="my-20">
                <h2 className="text-center text-primary text-2xl">
                    Our Services
                </h2>
                <h1 className="text-center text-black text-4xl my-2">
                    Services We Provide
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img
                        src={treatment}
                        class="lg:max-w-sm sm:max-w-screen rounded-lg shadow-2xl"
                        alt="treatment"
                    />
                    <div className="lg:p-20">
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <PrimaryButton text="Get Started"></PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
