import React from 'react'
import { img1, img2, img3 } from '../assets/image'

const content = [
    {
        img: img1,
        title: 'Introduce Digital Marketing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi sit quis delectus non quo sint temporibus, ab beatae?'
    },
    {
        img: img2,
        title: 'Data Science 101',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi sit quis delectus non quo sint temporibus, ab beatae?'
    },
    {
        img: img3,
        title: 'Implement Design Thinking in UX Research',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi sit quis delectus non quo sint temporibus, ab beatae?'
    }
]


export default function Services() {
    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='flex flex-col md:flex-row justify-between gap-6'>
                {content.map((c, i) => (
                    <div key={i + 1} className='bg-purple-600 p-6 rounded-lg flex flex-col gap-2 justify-between'>
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
