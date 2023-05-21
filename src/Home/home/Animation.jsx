import React from 'react';
import Lottie from 'lottie-react';
import Car from '../../../public/79797-car-lottie-animation.json'
import Baby from '../../../public/129806-baby-toy-train.json'

const Animation = () => {
    return (
        <div className='flex justify-around items-center my-container'>
            <Lottie className='' animationData={Baby} loop={true}></Lottie>
            <h3 className='text-xs lg:text-xl'>Unleash the magic of play at our toy website! Discover a captivating collection of toys that ignite imagination and inspire endless fun. With a seamless shopping experience and a commitment to safety, we're your trusted destination for joyful playtime. Join us in creating unforgettable memories, one toy at a time. Explore our toy website today and let the adventure begin!</h3>
            <Lottie className='' animationData={Car} loop={true}></Lottie>
        </div>
    );
};

export default Animation;