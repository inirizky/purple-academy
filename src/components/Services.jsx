import React from 'react'
import { img1, img2, img3 } from '../assets/image'

const content = [
    {
        img: img1,
        title: 'Introduce Digital Marketing',
        description: 'Learn the essentials of digital marketing and boost your online presence with expert strategies.'
    },
    {
        img: img2,
        title: 'Data Science 101',
        description: 'Dive into the fundamentals of data science and start your journey to becoming a data expert.'

    },
    {
        img: img3,
        title: 'Implement Design Thinking in UX Research',
description: 'Learn how to apply design thinking principles to enhance user experience research and drive innovative solutions.'

    }
]


export default function Services() {
    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-col md:flex-row justify-between gap-6'>
                {content.map((c, i) => (
                    <div key={i + 1} className='from-purple-700 to-purple-600 bg-gradient-to-t p-6 basis-1/3 relative rounded-lg flex flex-col gap-2 justify-between'>
                        <div className=''>
                            <img src={c.img} alt="" />
                        </div>
                        <div className='flex flex-col text-white gap-6'>
                            <h3 className='text-xl font-bold'>{c.title}</h3>
                            <p>{c.description}</p>
                        </div>
                        <button className='bg-yellow-400 font-medium p-2 rounded-md'>See Details</button>
                    </div>
                ))}
            </div>
            <button className='border-2 border-purple-900  font-medium py-3 w-full rounded-md'>See All Course</button>
        </div>
    )
}
