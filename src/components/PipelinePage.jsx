import Header from "./Header"
import Pipe from "../Svg/pipe.svg"
import { Footer } from "./Footer"
import { Biosensors } from "./Biosensors"


export function PipelinePage() {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="homepage relative isolate pt-14">
                <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:pt-28 lg:pb-60">
                    <div className="text-center">
                        <h1 className="text-center pipe-heading uppercase my-4">
                            Resource Effective Pipeline for a Broad Range of Solutions
                        </h1>
                        <p className="pipeline-page-para my-8">Terix is developing a vast set of diagnostics, targeted towards biomarkers which influence adverse outcomes for maternal health.  Employing cutting-edge techniques across the disciplines of microbiology, synthetic biology, and genomics in high-grade facilities. </p>
                    </div>
                </div>
                <img className="lg:-mt-60 -mt-24" src={Pipe} alt="" srcset="" />
            </div>

            <Biosensors></Biosensors>

            <Footer></Footer>

        </div>
    )
}