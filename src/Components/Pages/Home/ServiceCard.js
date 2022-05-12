import React from "react";

const ServiceCard = ({service}) => {
    return (
        <div class="card lg:w-max-lg bg-base-100 shadow-xl justify-self-center ">
            <figure class="px-10 pt-10">
                <img
                    src={service.image}
                    alt="Shoes"
                    class="rounded-xl"
                />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.title}</h2>
                <p>{service.subTittle}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
