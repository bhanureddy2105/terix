import cardImage from "../images/card-image.png"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScienceCard } from "./ScienceCard";

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
                <p className="synthetic-para py-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
            </div>
            <div className="flex flex-row justify-between gap-x-36 mt-12 mb-48">
                <div className="flex flex-col w-1/2">
                    <h3 className="synthetic-subheading mb-4">Whole-Cell Bio Sensors</h3>
                    <p className="synthetic-para">Terix is leveraging CRSIPR / Cas9 technology to re-program stem cells, giving them consciousness about biological targets of interest. Biocompatibility is at the heart of our innovation, with non-invasive nanotechnology being used to develop lightweight and flexible dynamics in a novel manner.</p>
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
            <div className="flex flex-row justify-between gap-x-36 my-48">
                <div className="flex flex-col w-1/2">
                    <h3 className="synthetic-subheading mb-4">Out-Of-Cell Biology</h3>
                    <p className="synthetic-para">Terix is leveraging CRSIPR/Cas9 technology to re-program stem cells, giving them consciousness about biological targets of interest. Biocompatibility is at the heart of our innovation, with non-invasive nanotechnology being used to develop lightweight and flexible dynamics in a novel manner.</p>
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
            <div className="flex flex-row justify-between gap-x-36 my-48">
                <div className="flex flex-col w-1/2">
                    <h3 className="synthetic-subheading mb-4">Wearable Bio sensor</h3>
                    <p className="synthetic-para">Using techniques from the physical sciences, Terix is engineering high-precision  biosensors which can be attached to one’s body, allowing for the continuous monitoring of disease prognosis. Prognostic values are personalized and biosensor output signaling is translated into high-value information.</p>
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