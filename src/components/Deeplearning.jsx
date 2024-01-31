import { ScienceCard } from "./ScienceCard";
import cardImage from "../images/card-image.png"

export function DeepLearing() {
    return (
        <div>
            <div id="deep-learning" className="flex flex-col">
                <h1 className="text-center synthetic-heading">DEEP LEARNING</h1>
                <p className="synthetic-para py-16">Deep Learning at Terix represents the pinnacle of AI's transformative power in maternal healthcare, utilizing neural networks to interpret complex medical data for unprecedented diagnostic accuracy.</p>
            </div>
            <div className="flex flex-row justify-between gap-x-36 my-32">
                <div className="flex flex-col w-1/2">
                    <h3 className="synthetic-subheading mb-4">Data Graph</h3>
                    <p className="synthetic-para">Our Data Graphs elucidate the intricate relationships between genetic markers and maternal health outcomes, enabled by Terix's advanced machine learning algorithms.</p>
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