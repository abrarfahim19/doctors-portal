import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            _id:1,
            name:'Abrar Fahim',
            location:'Chittagong',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asdff, sit.",
            image: people1,
        },
        {
            _id:2,
            name:'Alsendra Colombo',
            location:'Itally',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sit.",
            image: people2,
        },
        {
            _id:3,
            name:'Nora Roberts',
            location:'California',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sit.",
            image: people3,
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between items-center'>
                <div className="">
                    <h2 className="text-left text-primary text-2xl">
                        Testimonials
                    </h2>
                    <h1 className="text-left text-black text-4xl my-2">
                        What our Patients Say
                    </h1>
                </div>
                <div>
                    <img className='lg:w-48 sm:w-16' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-20'>
                {
                    testimonials.map(testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;