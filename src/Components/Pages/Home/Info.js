import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../../assets/icons/clock.svg'
import Marker from '../../../assets/icons/marker.svg'
import Phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <InfoCard classToAdd={'from-secondary to-primary'} subText={'Lorem Ipsum is simply dummy text of the pri'} text={'Opening Hours'} img={Clock}></InfoCard>
            <InfoCard subText={'Brooklyn, NY 10036, United States'} text={'Visit our location'} img={Marker}></InfoCard>
            <InfoCard classToAdd={'from-primary to-secondary'} subText={'+000 123 456789'} text={'Contact us now'} img={Phone}></InfoCard>
        </div>
    );
};

export default Info;