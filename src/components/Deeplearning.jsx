import { ScienceCard } from "./ScienceCard";
import cardImage from "../images/card-image.png"

export function DeepLearing() {
    return (
        <div>
            <div id="deep-learning" className="flex flex-col">
                <h1 className="text-center synthetic-heading">DEEP LEARNING</h1>
                <p className="synthetic-para py-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
            </div>
            <div className="flex flex-row justify-between gap-x-36 my-32">
                <div className="flex flex-col w-1/2">
                    <h3 className="synthetic-subheading mb-4">Data Graph</h3>
                    <p className="synthetic-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..</p>
                </div>
                <div className="flex flex-row justify-start gap-x-36">
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color"
                        image={cardImage}
                        description="Et netus et malesuada fames ac turpis egestas. Nunc sed blandit libero volutpat sed cras ornare arcu.">
                    </ScienceCard>
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color1"
                        image={cardImage}
                        description="Et netus et malesuada fames ac turpis egestas. Nunc sed blandit libero volutpat sed cras ornare arcu.">
                    </ScienceCard>
                </div>
            </div>
        </div>
    )
}