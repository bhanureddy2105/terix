import Image1 from "../images/Biosensor-image1.png"
import Image2 from "../images/Biosensor-image2.png"
import "../App.css"


export function Biosensors() {
    return (
        <>
            <div className="flex flex-col p-16">
                <h2 className="biosensors-heading mb-12">Whole-Cell Biosensors</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-between">
                        <img src={Image1} className="h-10 w-32  mb-2" alt="" srcset="" />
                        <p>Cell Based Biosensors</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center my-2">Diagnostic Creation</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="w-1/3">Biomarker Discovery</p>
                            <p className="w-1/3">Bacteria Engineering</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Assay</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-12">Development</p>
                            <p className="mx-12">Validation</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Clinical Trails</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-2">Phase 1</p>
                            <p className="mx-2">Phase 2</p>
                            <p className="mx-2">Phase 3</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md slider-div p-4 my-4">
                    <div className="flex">
                        <div className="ml-3 flex fklex-row justify-start items-center gap-x-10">
                            <p className="text-sm">TRX-2643</p>
                            <p>|</p>
                        </div>
                        <div className="w-1/3 mt-2 mx-8">
                            <input type="range" min="1" max="100" value="100" className="slider slider1" />
                        </div>
                    </div>
                </div>
                <div className="rounded-md slider-div p-4 my-4">
                    <div className="flex">
                        <div className="ml-3 flex fklex-row justify-start items-center gap-x-10">
                            <p className="text-sm">TRX-2644</p>
                            <p>|</p>
                        </div>
                        <div className="w-1/3 mt-2 mx-8">
                            <input type="range" min="1" max="100" value="100" className="w-1/3 slider1" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-col p-16">
                <h2 className="biosensors-heading mb-12">Out-Of-Cell Biosensors</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-between">
                        <img src={Image2} className="h-10 w-32  mb-2" alt="" srcset="" />
                        <p>Paper based Diagnostics</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center my-2">Diagnostic Creation</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="w-1/3">Biomarker Discovery</p>
                            <p className="w-1/3">Bacteria Engineering</p>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Assay</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-12">Development</p>
                            <p className="mx-12">Validation</p>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Clinical Trails</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-2">Phase 1</p>
                            <p className="mx-2">Phase 2</p>
                            <p className="mx-2">Phase 3</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md slider-div1 p-4 my-4">
                    <div className="flex">
                        <div className="ml-3 flex fklex-row justify-start items-center gap-x-10">
                            <p className="text-sm">TRX-5872</p>
                            <p>|</p>
                        </div>
                        <div className="w-1/3 mt-2 mx-8">
                            <input type="range" min="1" max="100" value="100" className="slider2" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col p-16">
                <h2 className="biosensors-heading mb-12">Wearable Biosensors</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-between">
                        <img src={Image2} className="h-10 w-32  mb-2" alt="" srcset="" />
                        <p>In-Vitro Technologies</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-center my-2">Diagnostic Creation</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="w-1/3">Biomarker Discovery</p>
                            <p className="w-1/3">Bacteria Engineering</p>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Assay</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-12">Development</p>
                            <p className="mx-12">Validation</p>
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-center -mt-4 mb-2">Clinical Trails</p>
                        <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="mx-2">Phase 1</p>
                            <p className="mx-2">Phase 2</p>
                            <p className="mx-2">Phase 3</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-md slider-div2 p-4 my-4">
                    <div className="flex">
                        <div className="ml-3 flex fklex-row justify-start items-center gap-x-10">
                            <p className="text-sm">TRX-6795</p>
                            <p>|</p>
                        </div>
                        <div className="w-1/3 mt-2 mx-8">
                            <input type="range" min="1" max="100" value="100" className="slider3" />
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}