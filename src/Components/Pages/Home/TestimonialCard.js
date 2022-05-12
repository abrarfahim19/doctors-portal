import React from "react";

const TestimonialCard = ({ testimonial }) => {
    const { image, text, location, name } = testimonial;
    return (
        <div class="card lg:w-max-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{text}</p>
                <div class="flex justify-left items-center mt-5">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary mr-5">
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
