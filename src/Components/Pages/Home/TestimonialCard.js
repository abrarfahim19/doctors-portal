import React from "react";

const TestimonialCard = ({ testimonial }) => {
    const { image, text, location, name } = testimonial;
    return (
        <div className="card lg:w-max-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className="flex justify-left items-center mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary mr-5">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <h5 className="text-xl">{name}</h5>
                        <h5 className="">{location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
