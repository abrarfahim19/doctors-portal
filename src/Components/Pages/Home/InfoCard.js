import React from "react";

const InfoCard = ({img,subText,text,classToAdd}) => {
    return (
        <div className={"card bg-gradient-to-r bg-accent lg:card-side bg-base-100 shadow-xl px-5 "+classToAdd}>
            <figure>
                <img
                    src={img}
                    alt="Album"
                />
            </figure>
            <div class="card-body">
                <h2 className={"card-title text-white"}>{text}</h2>
                <p className="text-white">{subText}</p>
            </div>
        </div>
    );
};

export default InfoCard;
