import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            author: 'Forhad Hossain',
            content: 'I highly recommend the bamboo mat from DAG. It’s eco-friendly, easy to clean, and has added a touch of zen to my home.',
            photo: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='
        },
        {
            id: 2,
            author: 'Romjan Ali',
            content: 'The customer service at DAG is exceptional. They are always prompt in responding to inquiries and resolving any issues.',
            photo: 'https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6'
        },
        {
            id: 3,
            author: 'Iqbal Khan',
            content: 'The quality of the products from DAG is outstanding. I have been a loyal customer for years and have never been disappointed.',
            photo: 'https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg'
        },
        {
            id: 4,
            author: 'Jumur Aktar',
            content: 'The shipping process with DAG is fast and reliable. I always receive my orders on time and in perfect condition.',
            photo: 'https://blogger.googleusercontent.com/img/a/AVvXsEhXJ1lfuk2J1uTzEQ0mEsevS-j9NPaoh3MpWS2jwCfAFGtBI2dyq-glTwkWt_nUCPNsrSsg_BaEVWTysFDG4wzINj9ibAIKMPE5aJT8bXV7KrlysimjX0zy4XeQakYap3mx520j1_by85d3wACAUEpj_0gKZbaUB5tOGZCG8sBrB7mVLEqtSN3rnRO5=s16000'
        },
    ];

    const slidePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    };

    const slideNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const interval = setInterval(slideNext, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1500,
        });
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div data-aos="fade-right">
                <h4 className='text-2xl md:text-3xl text-p'>Our Happy</h4>
                <h2 className='text-5xl md:text-7xl font-bold mb-4 text-s'>Customers</h2>
                <div className='flex items-center gap-3'>
                    <div onClick={slidePrev} className='cursor-pointer border border-teal-600 text-p px-10 py-3 rounded-full font-bold uppercase text-l flex items-center gap-2' >
                        <span><BsArrowLeft /></span> <span>prev</span>
                    </div>
                    <div onClick={slideNext} className='cursor-pointer border border-teal-600 text-p px-10 py-3 rounded-full font-bold uppercase text-l flex items-center gap-2'>
                        <span>next</span> <BsArrowRight />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden mt-5 md:mt-0 relative h-[400px] md:min-h-[225px]' data-aos="fade-left">
                {
                    testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`md:flex gap-5 items-center p-6 bg-white rounded-2xl duration-300 w-full absolute top-1/2 left-0 transform -translate-y-1/2 ${index === currentSlide ? 'opacity-100' : 'opacity-0 left-full'}`}
                        >
                            <img className='mb-5 md:mb-0 w-36 h-44 flex-shrink-0 object-cover rounded-xl' src={testimonial?.photo} alt="" />
                            <div>
                                <p className='text-gray-500'>{testimonial.content}</p>
                                <h5 className='font-bold mt-3 text-p text-xl'>~ {testimonial.author}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;