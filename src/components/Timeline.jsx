const steps = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'complete' },
    { name: 'Step 3', href: '#', status: 'complete' },
    { name: 'Step 4', href: '#', status: 'complete' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function Timeline() {
    return (
        <>
            <div className='bg-zinc-200 rounded-2xl w-4/6 my-40'>
                <div className='grid place-content-center mb-20 py-20'>
                    <div className='mb-20'>
                        <h2 className='text-center text-2xl font-bold'>NEQUE DUIS LIBERO</h2>
                    </div>
                    <nav aria-label="Progress">
                        <ol role="list" className="flex items-center">
                            {steps.map((step, stepIdx) => (
                                <div className="flex flex-col">
                                    <p className="lg:text-xl md:text-lg lg:font-bold md:font-semibold mb-8 mr-2">{step?.name}</p>
                                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 lg:pr-52' : '', 'relative')}>
                                        <>
                                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                {stepIdx !== steps.length - 1 && <div className="h-0.5 w-full bg-indigo-600" />}
                                            </div>
                                            <div>

                                                <a href="#" className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
                                                    <span className="sr-only">{step.name}</span>
                                                </a>
                                            </div>
                                        </>
                                    </li>
                                </div>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}