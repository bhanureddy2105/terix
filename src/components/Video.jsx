import { useState, useEffect } from 'react'


export function Video() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = screenWidth >= 1024;
    const isMediumScreen = screenWidth >= 768 && screenWidth < 1024;
    const isSmallScreen = screenWidth < 768;


    return (
        <div className='flex flex-col justify-center'>
            <div className='lg:mx-52 lg:my-28 mx-12 my-8'>
                <h3 className='video-heading mb-8'> Re-Purposing New-Age Technology for a Rapid, Low-Cost Diagnostics Pipeline</h3>
                <p className='video-paragraph'>Synthetic Biology provides a platform for the generation of cellular solutions through precise genetic editing for the development of patient-focused diagnostic solutions. Terix’s pipeline eliminates the need for billion dollar, high-attrition multi-stage assays by utilizing the fundamental units of life: DNA, RNA, and mRNA.</p>
            </div>
            <div className='mt-0 mb-6 flex justify-center'>
                {isLargeScreen && <iframe width="1400" height="790" src="https://www.youtube.com/embed/NtGD8e6zjhc?si=dWKn-XVXNrhUXiOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                {isMediumScreen && <iframe width="700" height="400" src="https://www.youtube.com/embed/NtGD8e6zjhc?si=dWKn-XVXNrhUXiOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                {isSmallScreen && <iframe width="350" height="200" src="https://www.youtube.com/embed/NtGD8e6zjhc?si=dWKn-XVXNrhUXiOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
            </div>
        </div>
    )
}