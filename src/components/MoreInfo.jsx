import Pipeline from "../images/pipeline.png"
import Deep from "../images/deep.png"
import Research from "../images/research.png"
import Bio from "../images/bio.png"
import '../App.css'
import { ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { useState } from "react"


const tiers = [
    {
        name: 'synthetic biology',
        id: 'tier-bio',
        href: '#',
        image: Bio,
        price: { monthly: '$15', annually: '$144' },
        description: 'Building new-life with consciousness of the microbiome, positioned to gain insights into age-old diseases.',
    },
    {
        name: 'deep learning',
        id: 'tier-deep',
        href: '#',
        image: Deep,
        price: { monthly: '$30', annually: '$288' },
        description: 'Investigating trends in user data using patterns found over 10,000 biological data points, providing personalized insight.',
    },
    {
        name: 'Pipeline',
        id: 'tier-pipeline',
        href: '#',
        image: Pipeline,
        price: { monthly: '$60', annually: '$576' },
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    {
        name: 'Research',
        id: 'tier-research',
        href: '#',
        image: Research,
        price: { monthly: '$90', annually: '$864' },
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function MoreInfo() {

    const handleScroll = (direction) => {
        const container = document.getElementById('scrollContainer');
        const scrollAmount = 200;

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }

    };

    return (
        <div className="bg-white py-16 sm:py-32">
            <div className="mx-12">
                <div id="scrollContainer" className="mt-10 flex gap-8 overflow-x-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier?.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'py-36 px-20', 'card-color', 'flex flex-col justify-center'
                            )}
                            style={{ flex: '0 0 40%' }}
                        >
                            <img className='' src={tier.image} alt="" srcset="" />
                            <p className="mt-12 card-paragraph font-semibold">{tier.description}</p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className='mt-6 block rounded-md py-2 px-3
                                    text-center text-sm font-semibold leading-6 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
                                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                <div className="flex flex-row justify-center">
                                    {tier.name.toUpperCase()}
                                    <ArrowRightIcon className="h-6 w-6 ml-2"></ArrowRightIcon>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-12">
                <div className="w-12 h-12 rounded-full shadow-md px-2 py-3 mr-8">
                    <ArrowLeftIcon onClick={() => handleScroll('left')} className="arrow-color h-6 w-8 mr-5 cursor-pointer"></ArrowLeftIcon>
                </div>
                <div className="w-12 h-12 rounded-full shadow-md px-2 py-3">
                <ArrowRightIcon onClick={() => handleScroll('right')} className="arrow-color h-6 w-8 cursor-pointer"></ArrowRightIcon>
                </div>
            </div>
        </div>

    )
}