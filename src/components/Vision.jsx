import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useState } from "react"





export default function Vision() {

    const years = {
        "2023": "Further biomarker identification and Data Curation &",
        "2024": "Data-Driven Expansion",
        "2025": "Assay Optimization and Integration",
        "2026": "Clinical Trial Preparation",
        "2027": "Clinical Trial Execution",
        "2028": "Preparing for Regulatory Submission",
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

    const getMatter = (year) => {
        return years[year]
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
                        <div className="vision-subtext">{prevYear}</div>
                        <div className="bg-white rounded-xl">
                            <div className="vision-text">{currentYear}</div>
                        </div>
                        <div className="vision-subtext">{nextYear}</div>
                        <a className="cursor-pointer" onClick={bottomClick}><ChevronDownIcon className="h-16 w-16 mx-auto"></ChevronDownIcon></a>
                    </div>
                    <p className="card-paragraph w-1/2">
                        {getMatter(currentYear)}
                    </p>

                </div>
            </div>
        </>
    )
}