import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useState } from "react"





export default function Vision() {

    const years = {
        "2023": {
            heading: "Further biomarker identification and Data Curation",
            description : "Commencement of an in-depth analytical phase focusing on the meticulous identification and validation of potential biomarkers, alongside the systematic aggregation and organization of pertinent data sets for enhanced diagnostic accuracy."
        },
        "2024": {
            heading: "Data-Driven Expansion",
            description : "Strategic enlargement of diagnostic capabilities driven by robust data analysis, leveraging advanced computational methods to distill vast amounts of health data into actionable diagnostic insights."
        },
        "2025": {
            heading: "Assay Optimization and Integration",
            description : "Refinement and enhancement of assay protocols to ensure precision and reproducibility, followed by the seamless integration of these optimized assays into existing diagnostic frameworks to broaden clinical applicability."
        },
        "2026": {
            heading: "Clinical Trial Preparation",
            description : "Comprehensive preparation for extensive clinical trials, involving the formulation of detailed study protocols, securing of ethical approvals, and establishment of rigorous operational guidelines to ensure scientific validity."
        },
        "2027": {
            heading: "Clinical Trial Execution",
            description : "Implementation and meticulous management of multi-phase clinical trials to assess the efficacy and safety of the diagnostic services, with continuous data monitoring for adherence to regulatory and scientific standards."
        },
        "2028": {
            heading: "Preparing for Regulatory Submission",
            description : "Systematic compilation of clinical trial data and preparation of a comprehensive dossier for submission to regulatory authorities, ensuring that all necessary criteria for diagnostic service approval are meticulously documented and presented."
        }
    }

    const [prevYear, setPreviousYear] = useState("2023")
    const [currentYear, setCurrentYear] = useState("2024")
    const [nextYear, setNextYear] = useState("2025")

    const topClick = () => {
        if (prevYear !== "") {
            const parsedYear = parseInt(currentYear);
            setPreviousYear(parsedYear <= 2024 ? "" : (parsedYear - 2).toString());
            setCurrentYear((parsedYear - 1).toString());
            setNextYear(parsedYear.toString());
        }
    }

    const bottomClick = () => {
        if (nextYear !== "") {
            const parsedYear = parseInt(currentYear);
            setNextYear(parsedYear >= 2027 ? "" : (parsedYear + 2).toString());
            setCurrentYear((parsedYear + 1).toString());
            setPreviousYear(parsedYear.toString());
        }
    }

    const getVisionHeading = (year) => {
        return years[year]?.heading || ""
    }

    const getVisionDesc = (year) => {
        return years[year]?.description || ""
    }

    return (
        <>
            <div className="vision-div text-center">
                <h2 className="p-12 vision-heading">OUR VISION</h2>
                <div className="flex flex-row justify-between items-center max-w-5xl mx-auto pb-16">
                    <div className=" w-1/3 h-1/5 text-center">
                        <a className="cursor-pointer" onClick={topClick}>
                            <ChevronUpIcon className="h-16 w-16 mx-auto"></ChevronUpIcon>
                        </a>
                        <div className="vision-subtext">{prevYear !=="2028" ? prevYear : "2028-2030"}</div>
                        <div className="bg-white rounded-xl">
                            <div className="vision-text">{currentYear !=="2028" ? currentYear : "2028-2030"}</div>
                        </div>
                        <div className="vision-subtext">{nextYear !="2028" ? nextYear : "2028-2030" }</div>
                        <a className="cursor-pointer" onClick={bottomClick}><ChevronDownIcon className="h-16 w-16 mx-auto"></ChevronDownIcon></a>
                    </div>
                    <div className="flex flex-col gap-y-4 w-1/2">
                        <p className="card-paragraph font-bold">
                            {getVisionHeading(currentYear)}
                        </p>
                        <p className="card-paragraph-desc">
                            {getVisionDesc(currentYear)}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}