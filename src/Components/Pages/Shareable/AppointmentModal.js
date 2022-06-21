import { format } from "date-fns";
import React from "react";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";

const AppointmentModal = ({booking, date, setBooking, refetch}) => {
    const [user] = useAuthState(auth);
    const {_id, name, slots} = booking;
    const formattedDate = format(date, 'PP');

    const handleBookModal= event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const patientName = user.displayName;
        const email = user.email;
        const phone = event.target.phone.value;
        const treatment = {
            treatmentName:name,
            date:formattedDate,
            slot,
            patientName,
            email,
            phone
        }
        console.log(treatment);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(treatment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                console.log(data.booking);
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            setBooking(null);
        })
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="appointment-modal" className="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg text-center py-4">
                        {name}
                    </h3>
                    <form onSubmit={handleBookModal} className='text-center'>
                        <input type="text" defaultValue={format(date, 'PP')} className="input w-full max-w-xs bg-slate-200 text-semibold my-2" />
                        <select name="slot" className="select select-primary w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" name='name' defaultValue={user.displayName} className="input font-bold w-full max-w-xs bg-slate-200 text-semibold my-2" />
                        <input type="email" placeholder="Email" defaultValue={user.email} name="email" className="input font-semibold w-full max-w-xs bg-slate-200 text-semibold my-2" />
                        <input type="text" placeholder="Phone Number" name="phone" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" className="btn btn-secondary text-white w-full max-w-xs my-2" />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
