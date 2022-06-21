import React from "react";

const AppointmentCard = ({ service, setBooking }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:w-max-md bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                {slots.length ? slots[0]: <p className=" text-red-600 ">Not Available</p>}
                <p>{slots.length} {slots.length <= 1 ? 'space':'spaces'} Available</p>
                <div className="card-actions justify-center">
                    <label onClick={()=> setBooking(service)} htmlFor="appointment-modal" disabled={!slots.length} className="btn uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
