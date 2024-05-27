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
                                    <h2 className="project-header text">Aux-Battles <span className="project-subheader">How to get banned from Spotify</span></h2>
                                    <p className="project-p">Beginning during Winter Break in 2023 I was introduced to a game called &apos;Aux Battles&apos; by my roomate at the time. 
                                    The game has everyone sit around a TV, using an online spin-the-wheel website with pre-chosen &apos;prompts&apos;. Each turn two players would compete to find a song that matches the prompt within 60 seconds, followed by two 30 second playings of each selected song. 
                                    Other players then voted on the winner, gaining them a point and the game continued.</p>
                                </div>
                                <h3 className="padd-15 text">Conceptulization</h3>
                                <ImageNText 
                                    second_text="Work began with conceptual drawings of the games interface and mechanics. Simplicity and intuitive UI/UX were at the center of the design, a lesson picked up from prior projects and industry leaders. ''A user shouldn't have to think to understand what's happening'', this was especially important as part of the targeted audience was teenages whos attention might be quickly shifted away if faced with any cognitive load." 
                                    text="Spotify integration was paramount in my conceptulization as players would frequently freeze due to the tight time constraint and ultimately rely on their pre-made playlists. With such simple game mechanics it did not seem like such a troubling task." 
                                    img="/imgs/portfolio/aux-battles/DrawingCropped1.jpg"/>
                                <div className="about-text padd-15" style={{width: '100%'}}>
                                    <h3 className="project-header text" style={{marginBottom: '15px'}}>Building</h3>
                                    <p className="project-p">
                                        Being a single developer I had to keep the scope and tech-stack manageable. 
                                        The prototype would focus on the core-game functionality and aforementioned intuitive design, reserving the brilliant animations and game-extensions for later updates. 
                                    </p>
                                    <h4 className="text">Website Framework</h4>
                                    <p className="project-p">
                                        Performance being paramount and having multiple years of experience with react I&apos;d decided to move forward with <b>NextJS 13</b>. 
                                        SSR, ISR, CSR and even DSG are all easily accesible with their framework and can significantly reduce client load. 

                                    </p>
                                    <h4 className="text">Storage</h4>
                                    <p className="project-p">
                                        Only needing to store information such as user analytics, in-game prompt-packs and account information I&apos;d oppted to use <b>Pocketbase</b>. 
                                        A configurable SQLite service written in Go with realtime subcriptions, built-in auth and dahsboard UI all compiled down into a single executable was perfect for quickly shipping the application.  
                                    </p>
                                    <h4 className="text">Connectivity</h4>
                                    <p className="project-p">
                                        Web sockets would be needed to connect all users to a single game instance, keeping state synced for every user. <b>SocketIO</b> was chosen for it&apos;s vast community and TypeScript implimentation allowing for a single-language application.
                                    </p>
                                </div>
                                <div className="project-tech-banner" style={{marginBottom: '15px'}}>
                                    <Image className="project-image" src="/imgs/logos/next.png" width={300} height={300} alt="next JS Logo"/>
                                    <Image className="project-image" src="/imgs/logos/pb.png" width={300} height={300} alt="next JS Logo"/>
                                    <Image className="project-image" src="/imgs/logos/socketio.png" width={300} height={300} alt="next JS Logo"/>
                                </div>
                                <div className="about-text padd-15" style={{width: '100%'}}>
                                    <h3 className="text">Providing Shareholder Value</h3>
                                    <div className="project-p">
                                        While building the prototype a friend recommended taking my game a SJSU startup competition. 
                                        Despite initally only creating the game for other&apos;s enjoyment and experience, this was a great opportunity to test the theorize the commercial viability of the game.
                                        After making it through the first 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}