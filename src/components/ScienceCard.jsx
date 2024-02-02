import { ArrowRightIcon } from "@heroicons/react/24/outline"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ScienceCard(props) {
    return (
        <div className="flex flex-col w-2/3">
            <img src={props.image} className="h-1/2" alt="" srcset="" />
            <div className={classNames("pt-4 pb-12 px-4", props.className)}>
                <p className="pb-6 text-white science-card-desc">{props.date}</p>
                <p className="pb-8 text-white min-h-36 science-card-desc">{props.description}</p>
                <a className="text-center text-white" href="">
                    <div className="flex flex-row justify-center items-center cursor-pointer">
                        Read the Article
                        <ArrowRightIcon className="h-6 w-6 ml-2 arrow-color"></ArrowRightIcon>
                    </div>
                </a>
            </div>
        </div>
    )
}