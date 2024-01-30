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
            color:"#BEA3DA",
            linkedinUrl: '#',
        },
        {
            name: 'Khartik Uppalapati',
            role: 'Co-Founder, CRO, CTO TERIX',
            imageUrl: TeamsImage,
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in luctus leo. Duis finibus fringilla libero, sit amet varius lectus bibendum eu.',
            xUrl: '#',
            color:"#D7A4CE",
            linkedinUrl: '#',
        },
    ]
    return(
        <div>
            <h1 className="founder-heading">FOUNDERS</h1>
            <div className="flex justify-between lg:my-24 lg:mx-44 sm:my-24 my-24 gap-x-24">
                    {people.map((person) => (
                        <div className='shadow-md w-1/2 py-8' style={{background : person.color}}>
                            <div className="relative">
                                <img
                                    className="h-60 w-60 mx-auto"
                                    src={person.imageUrl} // Replace with your image source
                                    alt={person.name}
                                    style={{ marginTop: '-4.5rem' }} // Adjust the negative margin to control the overlap
                                />
                            </div>
                            
                            <div className="w-1/2 mx-auto py-4">
                                <h3 className="mt-6 text-lg text-center font-semibold leading-8 text-gray-900">{person.name.toUpperCase()}</h3>
                                <p className="text-base text-center leading-7 text-gray-900" >{person.role}</p>
                            </div>
                            <p className="my-8 mx-16 text-base text-center leading-7 founder-bio text-gray-600">{person.bio}</p>
                        </div>

                    ))}
            </div>
        </div>
    )
}