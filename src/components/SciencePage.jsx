import { Footer } from "./Footer"
import Header from "./Header"
import { SyntheticBiology } from "./SyntheticBiology"
import Trx from "../images/TRX.png"
import Science from "../images/science-page.png"
import { DeepLearing } from "./Deeplearning"


export function SciencePage() {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="relative isolate pt-14">
                <img
                    src={Science}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="mx-auto max-w-5xl py-24 sm:py-48 lg:pt-28 lg:pb-60">
                    <div className="text-center">
                        <h1 className="mt-16 text-center home-heading capitalize">
                            Explore the basis of our Cutting-Edge Technologies built on the Principles of Resource Effective Science
                        </h1>
                    </div>
                    <div className="my-20"></div>
                </div>
            </div>

        <div className="p-16">
            <SyntheticBiology></SyntheticBiology>
            <DeepLearing></DeepLearing>
        </div>

            <div>
                <h1 className="text-center synthetic-heading my-12">TRX-2643</h1>
                <div className="flex flex-row justify-between relative">
                    <div className="w-2/3 pt-40 pb-80" style={{ background: "#D3A1CA" }}>
                        <div className="w-1/3 mx-32">
                            <p className="text-center trx mb-12">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet</p>
                        </div>
                        <a href="" className="rounded-md request-btn p-3 mx-32 text-sm font-semibold shadow-sm">
                            Request More Info
                        </a>
                    </div>
                    <img
                        src={Trx}
                        alt="Overlapping Image"
                        className="absolute top-32 left-1/2 w-1/4 h-1/3"
                    />
                    <div className="w-1/3 py-12" style={{ background: "#AA8FD6" }}>
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </div>
    )
}