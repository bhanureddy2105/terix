import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Sponser1 from "../images/Sponser1.png";
import Sponser2 from "../images/Sponser2.png";
import Sponser3 from "../images/Sponser3.png";
import Sponser4 from "../images/Sponser4.png";
import Sponser5 from "../images/Sponser5.png";
import Sponser6 from "../images/Sponser6.png";
import Sponser7 from "../images/Sponser7.png";
import Sponser8 from "../images/Sponser8.png";
import Sponser9 from "../images/Sponser9.png";
import Sponser10 from "../images/Sponser10.png";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"



export function Partners() {
    return (
        <div>
            <h1 className="founder-heading mt-20">OUR PARTNERS</h1>

            <Carousel showThumbs={false} showStatus={false} renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                    <div
                        className={`${hasPrev ? 'absolute' : 'hidden'
                            } top-0 bottom-16 left-0 flex justify-center items-center p-3 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <ChevronLeftIcon className="w-9 h-9 cursor-pointer" />
                    </div>
                );
            }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <div
                            className={`${hasNext ? 'absolute' : 'hidden'
                                } top-0 bottom-16 right-0 flex justify-center items-center p-3 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                        >
                            <ChevronRightIcon className="w-9 h-9 cursor-pointer" />
                        </div>
                    );
                }}>
                <div className="flex py-32 px-16 gap-x-20">
                    <div><img alt="sample_file" src={Sponser1} /></div>
                    <div><img alt="sample_file" src={Sponser2} /></div>
                    <div><img alt="sample_file" src={Sponser3} /></div>
                    <div><img alt="sample_file" src={Sponser4} /></div>
                    <div><img alt="sample_file" src={Sponser5} /></div>
                </div>
                <div className="flex py-32 px-16 gap-x-20">
                    <div><img alt="sample_file" src={Sponser6} /></div>
                    <div><img alt="sample_file" src={Sponser7} /></div>
                    <div><img alt="sample_file" src={Sponser8} /></div>
                    <div><img alt="sample_file" src={Sponser9} /></div>
                    <div><img alt="sample_file" src={Sponser10} /></div>
                </div>
            </Carousel>
        </div>
    )
}