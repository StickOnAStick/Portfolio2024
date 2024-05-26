import ImageNText from "@/components/project/img&text";
import Image from "next/image"

export type ProjectProps = {
    proj: string;
    images: {
        className?: string;
        src: string[];
        width?: number;
        height?: number;
        alt?: string;
    }
    header: string;
    main: string;
};

export default function PortfolioAuxBattles(){
    return(
        <main>
            <section className="section portfolio" id="portfolio/aux-battles">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                        <h2>Aux Battles</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="project-image-banner">
                                <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/aux-battles/mobile1Cropped.png" height={300} width={300} alt="main"/>
                                <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/aux-battles/Video1Cropped.png" height={300} width={300} alt="main"/>
                                <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/aux-battles/SearchCropped.png" height={300} width={300} alt="main"/>
                            </div>
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h2 className="project-header">Aux-Battles <span className="project-subheader">How to get banned from Spotify</span></h2>
                                    <p>Beginning during Winter Break in 2023 I was introduced to a game called &apos;Aux Battles&apos; by my roomate at the time. The game has users sit around a TV, spin a wheel with pre-chosen &apos;prompts&apos; </p>
                                </div>
                                <ImageNText/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}