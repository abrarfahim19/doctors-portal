import React from 'react';
import PrimaryButton from '../Shareable/PrimaryButton';

const HomeContact = () => {
    return (
        <section className="bg-[url('/src/assets/images/appointment.png')]">
            <div className="p-20">
                    <h2 className="text-center text-primary text-2xl">
                        Contact Us
                    </h2>
                    <h1 className="text-center text-white text-4xl my-2">
                        Stay Connected With Us
                    </h1>
            </div>
            <div className="text-center flex flex-col justify-center items-center pb-10">
                <input type="text" placeholder="Email Adress" className="input input-bordered input-primary w-full max-w-sm my-2" />
                <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-sm my-2" />
                <input type="text" placeholder="Your Message" className="input input-bordered input-primary h-20 w-full max-w-sm mt-2 mb-5" />
                <PrimaryButton text='Submit'></PrimaryButton>
            </div>
        </section>
    );
};

export default HomeContact;