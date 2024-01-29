import image from "../images/image.png"
import { MoreInfo } from './MoreInfo'
import { Footer } from './Footer'
import Team from './Team'
import { Video } from './Video'
import Header from "./Header"
import Pipe from "../Svg/pipe.svg"
import Vision from "./Vision"
import Home from '../images/home.png'
import Home1 from '../images/home-1.png'
import '../App.css'
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Products } from "./Products"



export function HomePage() {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="homepage relative isolate pt-14">
                <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:pt-28 lg:pb-60">
                    <div className="flex flex-row justify-between">
                        <div className="snowman">
                            <img className="rounded-full bottom" src={Home1} alt="Snowman Bottom" />
                            <img className="rounded-full top" src={Home} alt="Snowman Top" />
                        </div>
                        <div className="text-center w-1/2">
                            {/* <h1 className="text-slate-50 text-center text-4xl font-bold tracking-wide sm:text-6xl">
                                REVOLUTIONIZING THE FUTURE OF MATERNAL HEALTHCARE.
                            </h1> */}
                            <h1 className="text-center home-heading">
                                REVOLUTIONIZING THE FUTURE OF MATERNAL HEALTHCARE.
                            </h1>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href="#" className="rounded-md learn-more-btn p-3 text-sm font-semibold text-white shadow-sm">
                                <div className="flex flex-row justify-center items-center">
                                    Learn More
                                    <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="lg:-mt-60 -mt-24" src={Pipe} alt="" srcset="" />
            </div>

            <Video></Video>
            <MoreInfo></MoreInfo>
            <div className="">
                <Vision></Vision>
            </div>
            <Products></Products>
            <div className='my-20'></div>
            <Team></Team>
            <Footer></Footer>


        </div>
    )
}