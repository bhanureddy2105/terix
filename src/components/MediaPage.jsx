import Header from "./Header"
import { Footer } from "./Footer"
import MediaImage from "../images/media-image.png"
import Publication from "../images/publication-1.png"
import Publication2 from "../images/publication-2.png"



export function MediaPage() {
    return (
        <div className="">
            <Header></Header>
            <div className="teams-page relative isolate pt-14">
                <div className="mx-auto max-w-5xl pt-24 pb-16">
                    <div className="text-center my-24">
                        <h1 className="team-page-heading">
                            OUR MEDIA
                        </h1>
                        <img className="my-24" src={MediaImage} alt="" srcset="" />
                    </div>
                </div>
                <div className="flex flex-row justify-between mx-4">
                    <img src={Publication} className="w-1/2" alt="" srcset="" />
                    <img src={Publication2} className="w-1/2" alt="" srcset="" />
                </div>
            </div>
            <div className="my-40"></div>
            <Footer></Footer>
        </div>
    )
}