import TeamsImage from "../images/teams-image.png"
import "../App.css"

export function Founders(){
    const people = [
        {
            name: 'Abesalom Webb',
            role: 'Co-Founder, CEO TERIX',
            imageUrl: TeamsImage,
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in luctus leo. Duis finibus fringilla libero, sit amet varius lectus bibendum eu.',
            xUrl: '#',
            linkedinUrl: '#',
        },
        {
            name: 'Khartik Uppalapati',
            role: 'Co-Founder, CRO, CTO TERIX',
            imageUrl: TeamsImage,
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in luctus leo. Duis finibus fringilla libero, sit amet varius lectus bibendum eu.',
            xUrl: '#',
            linkedinUrl: '#',
        },
    ]
    return(
        <div>
            <h1 className="founder-heading">FOUNDERS</h1>
            <div className="flex justify-between lg:m-24 sm:my-24 my-24 gap-x-10">
                    {people.map((person) => (
                        <div className='card-1 shadow-md w-1/2'>
                            <div className="relative">
                                <img
                                    className="h-60 w-60 mx-auto"
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
            </div>
        </div>
    )
}