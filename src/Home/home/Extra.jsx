import React from 'react';
import { TruckIcon, CurrencyDollarIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Extra = () => {
    return (
        <div className='bg-red-400 text-white lg:h-32 w-full grid grid-cols-2 lg:grid-cols-3 lg:flex justify-around items-center mb-12 mt-8'>
            <div className='flex justify-center gap-3'>
            <TruckIcon className="h-7 lg:h-14 w-7 lg:w-14 text-white" />
            <div className='text-sm lg:text-lg lg:font-semibold'>
                <p>FAST SHIPPING</p>
                <p>Fast Shipping</p>
            </div>
            </div>
            <div className='flex justify-center gap-3'>
            <CurrencyDollarIcon className="h-7 lg:h-14 w-7 lg:w-14 text-white" />
            <div className='text-sm lg:text-lg lg:font-semibold'>
                <p>ONLINE PAYMENT</p>
                <p>Payment methods.</p>
            </div>
            </div>
            <div className='flex justify-center gap-3'>
            <PhoneIcon className="h-7 lg:h-14 w-7 lg:w-14 text-white" />
            <div className='text-sm lg:text-lg lg:font-semibold'>
                <p>24/7 SUPPORT</p>
                <p>Unlimited help desk.</p>
            </div>
            </div>
            
            <div className='flex justify-center gap-3'>  
            <TruckIcon className="h-7 lg:h-14 w-7 lg:w-14 text-white" />
            <div className='text-sm lg:text-lg lg:font-semibold'>
                <p>On time Delivery.</p>
                <p>On time Delivery.</p>
            </div>
            </div>
            
        </div>
    );
};

export default Extra;