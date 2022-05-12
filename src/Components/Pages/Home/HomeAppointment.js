import React from 'react';
import Doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../Shareable/PrimaryButton';
import Appointment from '../../../assets/images/appointment.png'

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${Appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={Doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-2xl text-primary font-semibold'>Appointment</h3>
                <h1 className='text-4xl text-white fornt-semibold'>Make an appointment Today</h1>
                <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam nostrum reiciendis dolore vel deserunt at temporibus! Accusamus fuga nam in incidunt aut quisquam, tenetur aspernatur distinctio, commodi ullam voluptatem ea praesentium? Omnis veritatis nobis sequi minus suscipit fugiat laborum.</p>
                <PrimaryButton text='Get Started'></PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppointment;