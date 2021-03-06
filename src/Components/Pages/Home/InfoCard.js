import React from "react";

const InfoCard = ({img,subText,text,classToAdd}) => {
    return (
        <div className={"card bg-gradient-to-r bg-accent lg:card-side shadow-xl p-5 "+classToAdd}>
            <figure>
                <img
                    src={img}
                    alt="Album"
                />
            </figure>
            <div className="card-body">
                <h2 className={"card-title text-white"}>{text}</h2>
                <p className="text-white">{subText}</p>
            </div>
        </div>
    );
};

export default InfoCard;
