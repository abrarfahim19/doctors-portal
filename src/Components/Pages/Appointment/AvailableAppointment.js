import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentModal from '../Shareable/AppointmentModal';
import Loading from '../Shareable/Loading';
import AppointmentCard from './AppointmentCard';

const AvailableAppointment = ({date}) => {
    const [booking, setBooking] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    

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
                    booking && <AppointmentModal refetch={refetch} date={date} booking={booking} key={booking?._id} setBooking={setBooking}></AppointmentModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;