import React from 'react'
import { infinity, certificate, expert } from '../assets/image'

const service = [
    {
        icon: expert,
        title: 'Learn from Experts',
        description: 'Gain insights and knowledge from industry professionals with years of experience in their fields.',
    },
    {
        icon: certificate,
        title: 'Get Certified',
        description: 'Receive a recognized certification upon completion to boost your career and validate your skills.',
    },
    {
        icon: infinity,
        title: 'Flexible Learning',
        description: 'Access courses anytime, anywhere with our flexible learning options tailored to fit your schedule.',
    }
]

export default function Services() {
    return (
        <>
            <div className='space-y-4 lg:w-1/2 lg:text-center px-8 md:px-24'>
                <h2 className='md:text-3xl text-2xl font-bold tracking-wider text-zinc-900'>Why Choose Purple Academy?</h2>
                <p className='font-medium text-zinc-700'>Explore our unique approach to learning and discover why we're the best choice for your educational journey.</p>
            </div>
            <div className='flex justify-between flex-col lg:flex-row lg:gap-8 lg:space-y-0 space-y-8  md:px-24'>
                {service.map((s, i) => (
                    <div className='flex flex-row items-center gap-4 lg:basis-1/3 text-zinc-900 w-full px-8 md:px-0'>
                        <img src={s.icon} className='w-20 h-20 bg-purple-700 rounded-full p-4' alt="Expert" />
                        <div className='space-y-1'>
                            <h3 className='text-xl font-medium'>{s.title}</h3>
                            <p className='text-sm'>{s.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
