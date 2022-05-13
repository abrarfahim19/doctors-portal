import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className=" hero bg-[url('/src/assets/images/bg.png')] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="sm:max-w-sm lg:max-w-lg lg:ml-20 rounded-lg h-full shadow-2xl"
                    alt="Chair"
                />
                <div className="mr-20">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
