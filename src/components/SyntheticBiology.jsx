import cardImage from "../images/card-image.png"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScienceCard } from "./ScienceCard";
import WholeCell1 from "../images/WholeCell-1.png"
import WholeCell2 from "../images/WholeCell-2.png"

import Outofcell1 from "../images/Outofcell-1.png"
import Outofcell2 from "../images/Outofcell-2.png"

import Wearable1 from "../images/wearable-1.png"
import Wearable2 from "../images/wearable-2.png"




export function SyntheticBiology() {

    const location = useLocation();

    // Scroll to the specified element when the location changes
    useEffect(() => {
        const elementId = location.hash.substring(1);
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [location.hash]);

    return (
        <div>
            <div id="synthetic" className="flex flex-col">
                <h1 className="text-center synthetic-heading">SYNTHETIC BIOLOGY</h1>
                <p className="synthetic-para py-16">Discover the intricacies of Terix's whole-cell biosensors utilizing CRISPR/Cas9 to endow stem cells with targeted detection capabilities, embodying biocompatibility and nanotechnological innovation. Examine the transformative potential of Terix's CRISPR/Cas9 enhanced whole-cell biosensors, engineered for ultra-sensitive detection of pathophysiological biomarkers, heralding a new era in proactive maternal health management.</p>
            </div>
            <div className="flex flex-row justify-between gap-x-28 mt-12 mb-48">
                <div className="flex flex-col basis-1/3">
                    <h3 className="synthetic-subheading my-4">Whole-Cell Bio Sensors</h3>
                    <p className="synthetic-para">Terix is leveraging CRSIPR/Cas9 technology to re-program stem cells, giving them consciousness about biological targets of interest. Biocompatibility is at the heart of our innovation, with non-invasive nanotechnology being used to develop lightweight and flexible dynamics in a novel manner.</p>
                </div>
                <div className="flex flex-row justify-start gap-x-28 basis-2/3">
                    <ScienceCard date="January 26, 2021"
                        className="science-card-color"
                        image={WholeCell1}
                        description="Innovative lycopene-based biosensor heralds a new era in water safety, utilizing synthetic biology for rapid, point-of-care detection of bacterial pathogens.">
                    </ScienceCard>
                    <ScienceCard date="July 13, 2017"
                        className="science-card-color1"
                        image={WholeCell2}
                        description="Cellular biosensors, evolving over two decades, demonstrate potential in pollution detection and diagnostics. This mini-review underscores the importance of reporter genes.">
                    </ScienceCard>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-x-28 my-48">
                <div className="flex flex-col basis-1/3">
                    <h3 className="synthetic-subheading my-4">Out-Of-Cell Biology</h3>
                    <p className="synthetic-para">In-Vitro technology provides a front for rapid diagnostic development in combination with synthetic biology. Terix builds upon paper based diagnostics, and techniques in origami in order to craft more effective, personalized solutions without ever having to enter the body.</p>
                </div>
                <div className="flex flex-row justify-start gap-x-36 basis-2/3">
                    <ScienceCard date="July 19, 2018"
                        className="science-card-color"
                        image={Outofcell1}
                        description="Advances in printed electronics offer a promising avenue for enhancing paper-based diagnostics, aligning with the ASSURED principles by integrating sensing.">
                    </ScienceCard>
                    <ScienceCard date="July 26, 2017"
                        className="science-card-color1"
                        image={Outofcell2}
                        description="Cellulose and flexible transparency paper-based microfluidic devices are emerging as cost-effective, portable solutions for point-of-care diagnostics.">
                    </ScienceCard>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-x-28 my-48">
                <div className="flex flex-col basis-1/3">
                    <h3 className="synthetic-subheading my-4">Wearable Bio sensor</h3>
                    <p className="synthetic-para">Using techniques from the physical sciences, Terix is engineering high-precision  biosensors which can be attached to one’s body, allowing for the continuous monitoring of disease prognosis. Prognostic values are personalized and biosensor output signaling is translated into high-value information.</p>
                </div>
                <div className="flex flex-row justify-start gap-x-36 basis-2/3">
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color"
                        image={Wearable1}
                        description="Flexible and stretchable biosensors represent a breakthrough in healthcare, combining enhanced signal accuracy and patient comfort to facilitate continuous, real-time health monitoring in both clinical and everyday settings.">
                    </ScienceCard>
                    <ScienceCard date="January 14, 2023"
                        className="science-card-color1"
                        image={Wearable2}
                        description="Wearable biosensors are at the forefront of revolutionizing healthcare by enabling continuous, real-time monitoring of physiological data through noninvasive means, using advanced electrochemical and optical sensing technologies.">
                    </ScienceCard>
                </div>
            </div>
        </div>
    )
}