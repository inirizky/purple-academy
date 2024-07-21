import React from 'react'
import { infinity, bgHeader, certificate, expert, headerImg, img1, learnImg, playstore, testi } from '../assets/image'

export default function Banner() {
    return (
        <>
            <div className='from-purple-700 to-purple-600 bg-gradient-to-t p-4 lg:p-8 flex flex-col lg:flex-row gap-4 lg:gap-12 text-white font-medium rounded-md'>
                <img src={learnImg} className='lg:w-96 rounded-md' alt="Study and Grow" />
                <div className='space-y-4 lg:space-y-6 lg:p-6'>
                    <h2 className='text-2xl md:text-3xl font-bold'>Let's Study and Grow!</h2>
                    <p className='font-normal text-zinc-100'>Join us to enhance your skills and reach new heights with our comprehensive learning programs.</p>
                    <button className='bg-yellow-500 text-black font-medium py-2 w-full lg:w-1/2 rounded-md'>Get Started</button>
                </div>
            </div>
        </>
    )
}
