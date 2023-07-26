import React from 'react';
import contactImg from '../../../assets/contact/undraw_contact_us_re_4qqt (1).svg'

const Contact = () => {
    return (
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div className='order-2 md:order-1'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className='mb-3'>
                        <label htmlFor="name" className='block font-medium mb-1'>Your Name</label>
                        <input type="text" name="name" id="name" className='block w-full bg-teal-50 px-3 py-2 rounded-md' placeholder='Write your name' required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="contact_email" className='block font-medium mb-1'>Your Email Address</label>
                        <input type="email" name="contact_email" id="contact_email" className='block w-full bg-teal-50 px-3 py-2 rounded-md' placeholder='Write your email' required />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="contact_subject" className='block font-medium mb-1'>Subject</label>
                    <input type="text" name="contact_subject" id="contact_subject" className='block w-full bg-teal-50 px-3 py-2 rounded-md' placeholder='Write subject' required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="contact_message" className='block font-medium mb-1'>Message</label>
                    <textarea name="contact_message" id="contact_message" cols="1" rows="5" className='block w-full bg-teal-50 px-3 py-2 rounded-md' placeholder='Write Message'></textarea>
                </div>
                <button className='block w-full py-3 bg-p mt-3 text-white font-semibold uppercase'>Send Message</button>
            </div>
            <div className='order-1 md:order-1'>
                <img className='w-full' src={contactImg} alt="" />
            </div>
        </div>
    );
};

export default Contact;