import Image from 'next/image';
import React from 'react';

function WelcomeBannerDashboard({user}){
    return (
        <div className='flex items-center gap-5 p-5 bg-purple-100 rounded-sm'>
            <Image src={'/hi-panda.jpg'} alt='panda'
            width={150}
            height={150}
            />

            <div>
                <h2 className='text-[32px] font-light font-sans'>Welcome Back,
                    <span className='font-bold text-primary font-serif'>{user?.fullName}</span>
                </h2>
                <h2 className='text-[16px] font-light text slate-500 font-sans'>Lets Begin Learning where you left off, <br/>
                    Keep it up and improve your progress 
                </h2>
            </div>

        </div>
    )
}
export default WelcomeBannerDashboard