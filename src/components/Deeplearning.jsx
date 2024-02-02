import { ScienceCard } from "./ScienceCard";
import cardImage from "../images/card-image.png"
import datagraph1 from "../images/Datagraph-1.png"
import datagraph2 from "../images/Datagraph-2.png"

export function DeepLearing() {
    return (
        <div>
            <div id="deep-learning" className="flex flex-col">
                <h1 className="text-center synthetic-heading">DEEP LEARNING</h1>
                <p className="synthetic-para py-16">Deep Learning at Terix represents the pinnacle of AI's transformative power in maternal healthcare, utilizing neural networks to interpret complex medical data for unprecedented diagnostic accuracy.</p>
            </div>
            <div className="flex flex-row justify-between gap-x-28 my-24">
                <div className="flex flex-col basis-1/3">
                    <h3 className="synthetic-subheading mb-4">Data Graph</h3>
                    <p className="synthetic-para">Our Data Graphs elucidate the intricate relationships between genetic markers and maternal health outcomes, enabled by Terix's advanced machine learning algorithms.</p>
                </div>
                <div className="flex flex-row justify-start gap-x-36 basis-2/3">
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color"
                        image={datagraph1}
                        description="Terix's latest study, demonstrates how deep learning models can predict pregnancy complications with over 95% accuracy by analyzing multi-omic data.">
                    </ScienceCard>
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color1"
                        image={datagraph2}
                        description="On January 14, 2023, Terix released a white paper on the role of AI in enhancing the specificity of CRISPR-based diagnostics in the early detection of preeclampsia.">
                    </ScienceCard>
                </div>
            </div>
        </div>
    )
}