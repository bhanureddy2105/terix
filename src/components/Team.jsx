import React, { useState, useEffect } from 'react';
import "../App.css"
import Ceo from '../images/ceo.png'
import CoFounder from '../images/co-founder.png'
import Pipe from "../Svg/down-pipe.svg"
import { ChevronRightIcon } from '@heroicons/react/24/outline';


const people = [
    {
        name: 'Abesalom Webb',
        role: 'Co-Founder, CEO TERIX',
        imageUrl: Ceo,
        bio: '“Terix’s pipeline was designed to keep overhead low whilst keeping innovation high, creating a sustainable environment to develop diagnostics that mother’s around the world need.”',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Khartik Uppalapati',
        role: 'Co-Founder, CRO, CTO TERIX',
        imageUrl: CoFounder,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in luctus leo. Duis finibus fringilla libero, sit amet varius lectus bibendum eu. Maecenas in luctus leo. Duis finibus fringilla libero, sit amet varius lectus bibendum eu.',
        xUrl: '#',
        linkedinUrl: '#',
    },
]

export default function Team() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = screenWidth >= 1300;

    return (
        <div className="team-card py-12 md:py-24 lg:py-20">
            <img className="lg:-mt-36 -mt-20" src={Pipe} alt="" srcset="" />
            <div className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-y-20 px-12 lg:px-16 xl:grid-cols-3">
                {isLargeScreen && <h2 className='team-color'>TEAM</h2>}
                {!isLargeScreen && <div>
                    <p className="text-3xl font-bold tracking-tight">Team</p>
                </div>}
                <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16 xl:col-span-2">
                    {people.map((person) => (
                        <div className='bg-white rounded-lg shadow-md'>
                            <div className="relative">
                                <img
                                    className="h-60 w-60 mx-auto rounded-lg"
                                    src={person.imageUrl} // Replace with your image source
                                    alt={person.name}
                                    style={{ marginTop: '-2rem' }} // Adjust the negative margin to control the overlap
                                />
                            </div>
                            <div className="px-12 py-4">
                                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name.toUpperCase()}</h3>
                                <p className="text-base leading-7 text-gray-900">{person.role}</p>
                                <p className="mt-8 text-base leading-7 text-gray-600">{person.bio}</p>
                            </div>
                        </div>


                    ))}
                                    <a href="#" className="rounded-md read-more-btn p-3 text-sm font-semibold text-white shadow-sm">
                    <div className="flex flex-row justify-center items-center">
                        Read More
                        <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
                    </div>
                </a>
                </ul>

            </div>
        </div>

    )
}