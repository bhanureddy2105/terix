import { ArrowRightIcon } from "@heroicons/react/24/outline"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ScienceCard(props) {
    return (
        <div className="flex flex-col w-1/3">
            <img src={props.image} alt="" srcset="" />
            <div className={classNames("pt-4 pb-12 px-4", props.className)}>
                <p className="pb-6">{props.date}</p>
                <p className="pb-8">{props.description}</p>
                <a className="text-center" href="">
                    <div className="flex flex-row justify-center items-center cursor-pointer">
                        Read the Article
                        <ArrowRightIcon className="h-6 w-6 ml-2 arrow-color"></ArrowRightIcon>
                    </div>
                </a>
            </div>
        </div>
    )
}