import { Footer } from "./Footer"
import Header from "./Header"
import { SyntheticBiology } from "./SyntheticBiology"
import Trx from "../images/TRX.png"
import Science from "../images/science-page.png"
import { DeepLearing } from "./Deeplearning"
import { InformationCircleIcon } from "@heroicons/react/24/outline"


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
                    <div className="w-2/3 pt-40 pb-44" style={{ background: "#D3A1CA" }}>
                        <div className="mx-28">
                            <p className="text-center trx mb-36">TRX-2643 represents Terix's latest foray into the avant-garde of precision medicine, encapsulating a synthesized bioactive ligand designed for selective modulation of epigenetic transcription factors. Developed through an innovative CRISPR-mediated synthetic pathway, this compound precisely targets histone methylation processes, disrupting aberrant gene silencing mechanisms linked to gestational diabetes mellitus. The utilization of high-throughput screening and next-generation sequencing in its development underscores its potential as a targeted therapeutic agent, paving the way for personalized treatment modalities in maternal-fetal medicine.</p>
                        </div>
                        <div className="w-2/3 ml-60 flex flex-col items-center">
                            <div className="more-info flex flex-row items-center gap-x-2">
                                <InformationCircleIcon className="h-6 w-6 text-white"></InformationCircleIcon>
                               <p>FOR MORE INFORMATION ON OUR PRODUCT</p> 
                               </div>
                            <form className="mt-6 sm:flex sm:w-1/2">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="w-full min-w-0 appearance-none border-0 bg-white px-3 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                    placeholder="Enter your Email Address"
                                />
                                {/* <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Subscribe
                                    </button>
                                </div> */}
                            </form>
                        </div>
                        {/* <a href="" className="rounded-md request-btn p-3 mx-32 text-sm font-semibold shadow-sm">
                            Request More Info
                        </a> */}

                    </div>
                    <img
                        src={Trx}
                        alt="Overlapping Image"
                        className="absolute science-page-image"
                    />
                    <div className="w-1/3 py-12" style={{ background: "#AA8FD6" }}>
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </div>
    )
}