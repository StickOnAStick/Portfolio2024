import Image from "next/image";
import ImageNText from "@/components/project/img&text";

export default function ProjSocialStatus(){
    return (
        <>
        <div className="row">
            <div className="section-title padd-15">
                <h2>Social Status</h2>
            </div>
        </div>
        <div className="row">
            <div className="about-content padd-15">
                <div className="project-image-banner">
                    <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/SocialStatus/nice.jpg" height={300} width={300} alt="studio"/>
                    <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/SocialStatus/closeupCropped2.png" height={300} width={300} alt="selfie"/>
                    <Image className="project-image" style={{marginBottom: '15px'}} src="/imgs/portfolio/SocialStatus/picam.png" height={300} width={300} alt="picam v2"/>
                </div>
                <div className="row">
                    <div className="about-text padd-15">
                        <h2 className="project-header text">Social Status <span className="project-subheader">Mapping Societal Patterns</span></h2>
                        <p className="project-p">
                            Having just joined Tesla for an Autopilot Silicon Validation internship and having recently halted production of Aux-Battles due to my Spotify ban I&apos;d wanted to explore AI and hardware projects in my free time.
                        </p>
                    </div>
                    <h3 className="padd-15 text">Ideation</h3>
                    <ImageNText
                        text="The concept was heavily inspired by existing technologies such as Snap Maps which map out local ''hot-spots'' of social activity; however, I did not feel that knowing where a lot of people were was enough I'd wanted to know what they were feeling, doing, or in laymans terms ''their energy''." 
                        second_text={<>Using video feed taken from a Raspberry Pi and streamed to a server I could map out behavior patterns using image recognition over a time series. That is, by observing things such as noise (dB), objects & entities in frame and bodily movements over a <b>time series</b> we could predict the atmosphere and happenings of a given locale.</>}
                        img="/imgs/portfolio/SocialStatus/SnapMap.png"/>
                    <div className="about-text padd-15" style={{width: '100%'}}>
                        <h3 className="project-header text" style={{marginBottom: '15px'}}>Conceptualization</h3>
                        <p className="project-p">

                        </p>
                        <h4 className="text">Website Framework</h4>
                        <p className="project-p">
                            Wanting to focus on the AI and Backend processes I&apos;d opted to use <b>NextJS 14</b> as I was already familiar from prior projects like Aux Battles and the performance, ease of use, and spin-up-time were exceptional.  
                        </p>
                        <h4 className="text">Storage</h4>
                        <p className="project-p">
                            Similar to the webapp framework choice I&apos;d opted for <b>Pocketbase</b> as it has a built-in s3 bucket storage and it was perfect for handling mass fetches. While the upload performance wasn&apos;t as great, PocketBase would be more than capable to handle a camera uplading 60 photos per second. 
                        </p>
                        <h4 className="text">Cache</h4>
                        <p className="project-p">
                            Since we needed to make predictions over a time series, that is, the previous photo(s) change the weights of the current prediction I needed a way to quickly  
                        </p>
                        <h4 className="text">Backend</h4>
                        <p className="project-p">
                            Web sockets would be needed to connect all users to a single game instance, keeping state synced for every user. <b>SocketIO</b> was chosen for it&apos;s vast community and TypeScript implimentation allowing for a single-language application.
                        </p>
                        <h4 className="text">AI Framework</h4>
                        <p className="project-p">
                            PyTorch was used despite having prior experience with TensorFlow as I&apos;d wanted to explore more offerings & it was the framework of choice for Tesla&apos;s AutoPilot vision <b>public knowledge don&apos;t sue :)</b>.
                        </p>
                    </div>
                    <div className="project-tech-banner" style={{marginBottom: '15px'}}>
                        <Image className="project-image" src="/imgs/logos/next.png" width={300} height={300} alt="next JS Logo"/>
                        <Image className="project-image" src="/imgs/logos/pb.png" width={300} height={300} alt="next JS Logo"/>
                        <Image className="project-image" src="/imgs/logos/socketio.png" width={300} height={300} alt="next JS Logo"/>
                    </div>
                    <div className="about-text padd-15" style={{width: '100%'}}>
                        <h3 className="text" style={{marginBottom: '15px'}}>Hardware</h3>
                        <ImageNText 
                        text="While building the prototype a friend recommended taking my game a SJSU startup competition. 
                            Despite initally only creating the game for other's enjoyment and experience, this was an opportunity to practice pitching and test the commercial viability of the game."
                        second_text="The revenue stream I discovered was to allow users to create and sell their own ''prompt-packs'' via an in-game marketplace. Solving two issues in one stroke, content and revenue generation, I moved forward with this proposal for my pitch."
                        right={true}
                        video={true}
                        img="/imgs/portfolio/SocialStatus/video.mp4"/>
                        <p className="project-p">
                            Ultimately making it to the final stage of the competition I&apos;d enjoyed pushing myself to do this despite originally having no intention to. Learning what VC&apos;s expectations are ultimately helped me in presenting future projects such as U-Fi to VC&apos;s and ultimately has .
                        </p>
                    </div>
                    <div className="about-text padd-15" style={{width: "100%"}}>
                        <h3>Hardware</h3>
                        <p>Originally opting to use a <b>Pi-Pico W</b> with a <b>SPI Camera</b> due to budget constraints and a *theoretical acceptable performance for uploading images.</p>
                    </div>
                    <div className="about-text padd-15" style={{width: '100%'}}>
                        <h3 className="project-header text" style={{marginBottom: '15px'}}><span className="project-subheader">Ban</span> and Conclusion</h3>
                        <p className="project-p">
                            Releasing the game July 1st, 2023 and quickly advertising through the r/AuxBattlesGame subreddit. Continually posting to an unresponsive community, although uninspiring, did pay it&apos;s dividends with the game ultimately hitting 20k users & 1k recurring within a month.
                            With numbers providing motivation I prepared to launch the prompt-pack marketplace update to expand the games content and provide a revenue stream. Spotify had other plans however, formally banning be from using their developer service due to usage in a game on August 6th, a week before the slightly delayed August 15th release date.
                        </p>
                        <p className="project-p">
                            I&apos;d looked into other services even going on meetings with Deezer and getting refferals for Amazon&apos;s new music API service; however, none of these results met the requirements to be allowed in games and not cause me bankruptcy.
                            <b>After this, work for the game stopped.</b>
                        </p>
                        <p className="project-p">
                            Until... I&apos;d discovered that someone cloned my game. After finding and calling them for banter about such as them using the prompt-pack idea but using youtube&apos;s API and giving merit for a cool feature added wherein users could extend the currently playing track.
                            After our brief chat I&apos;d prospected if they&apos;d like to continue with development after I discovered a loop-hole in the Spotify TOS; however, despite my charm they declinded. Leaving me to decide if I should continue with development, fueled by competitive drive and desire to finish what was started. 
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    );
}