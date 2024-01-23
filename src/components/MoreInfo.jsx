import { useState } from 'react'
import Pipeline from "../Svg/pipeline.svg"
import Deep from "../Svg/deep-learning.svg"
import Research from "../Svg/research.svg"
import Bio from "../Svg/bio.svg"
import '../App.css'


const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
    {
        name: 'synthetic biology',
        id: 'tier-bio',
        href: '#',
        image: Bio,
        price: { monthly: '$15', annually: '$144' },
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    {
        name: 'deep learning',
        id: 'tier-deep',
        href: '#',
        image: Deep,
        price: { monthly: '$30', annually: '$288' },
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
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
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier?.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8', 'card-color'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier?.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                    'text-lg font-semibold leading-8', 'flex justify-center'
                                )}
                            >
                                {tier.name.toUpperCase()}
                            </h3>
                            <img className='' src={tier.image} alt="" srcset="" />
                            <p className="mt-4 text-sm leading-6">{tier.description}</p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}