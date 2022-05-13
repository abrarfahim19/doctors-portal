import React from "react";

const ServiceCard = ({service}) => {
    return (
        <div className="card lg:w-max-lg bg-base-100 shadow-xl justify-self-center ">
            <figure className="px-10 pt-10">
                <img
                    src={service.image}
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.subTittle}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
