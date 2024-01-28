const people = [
    {
        name: 'Jerry Sheng',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Ahaan Shah',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Aarthi Raghavan',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Diya Vatsavai',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
]


export function Research() {
    return (
        <>
            <h1 className="founder-heading">RESEARCH ASSOCIATES</h1>
            <div className="research-card my-4">
                <div className="p-4">
                    <ul role="list" className="mt-8 flex flex-row justify-around">
                        {people.map((person) => (
                            <li className="flex flex-col jusitfy-center items-center" key={person.name}>
                                <img className="mx-auto h-36 w-36 rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}