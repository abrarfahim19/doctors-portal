import React from "react";

const PrimaryButton = ({text}) => {
    return (
        <button className="btn uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary btn-primary">
            {text}
        </button>
    );
};

export default PrimaryButton;
