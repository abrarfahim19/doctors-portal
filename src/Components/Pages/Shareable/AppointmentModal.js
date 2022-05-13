import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({booking,date, setBooking}) => {
    const {_id, name, slots} = booking;
    const handleBookModal= event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(_id,slot,userName,email,phone,date,name)
        setBooking(null);
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="appointment-modal" className="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg text-center py-4">
                        {name}
                    </h3>
                    <form onSubmit={handleBookModal} className='text-center'>
                        <input type="text" value={format(date, 'PP')} className="input w-full max-w-xs bg-slate-200 text-semibold my-2" />
                        <select name="slot" className="select select-primary w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" name='name' className="input input-bordered input-primary w-full max-w-xs my-2" />
                        <input type="text" placeholder="Phone Number" name="phone" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" placeholder="Email" name="email" className="input input-bordered input-primary w-full max-w-xs my-2" />
                        <input type="submit" placeholder="email" className="btn btn-secondary text-white w-full max-w-xs my-2" />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
