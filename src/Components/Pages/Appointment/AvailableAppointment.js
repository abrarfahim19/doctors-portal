import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../Shareable/AppointmentModal';
import AppointmentCard from './AppointmentCard';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [booking, setBooking] = useState(null);
    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div>
            <p className='text-secondary text-center m-10 text-3xl text-bold'>Available appointments for {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <AppointmentCard key={service._id} setBooking={setBooking} service={service}></AppointmentCard>)
                }
            </div>
            <div>
                {
                    booking && <AppointmentModal date={date} booking={booking} setBooking={setBooking}></AppointmentModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;