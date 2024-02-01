import { useEffect } from "react"
import { Footer } from "./Footer"
import { Founders } from "./Founders"
import Header from "./Header"
import { Research } from "./Research"
import { Partners } from "./Partners"

export function TeamPage() {
    useEffect(() => {
        const targetElement = document.getElementById("team");

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [])

    return (
        <div id="team" className="">
            <Header></Header>
            <div className="teams-page relative isolate pt-14">
                <div className="mx-auto max-w-5xl pt-24 pb-16">
                    <div className="text-center my-24">
                        <h1 className="team-page-heading">
                            MEET THE INNOVATORS
                        </h1>
                    </div>
                </div>
            </div>
            <Founders></Founders>
            <Research></Research>
            <div className="mt-40">
                <Partners></Partners>
            </div>

            <div className="my-40"></div>
            <Footer></Footer>
        </div>
    )
}