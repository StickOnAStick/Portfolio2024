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
                            Not needing much in the way of storage I&apos;d opted for <b>Pocketbase</b> as it has a built-in s3 bucket storage and is performant when handling mass reads. While the upload performance wasn&apos;t as great, PocketBase would be more than capable to handle a camera uplading 60 photos per second. 
                        </p>
                        <h4 className="text">Cache</h4>
                        <p className="project-p">
                            Since we needed to make predictions over a time series, that is, the previous photo(s) change the weights of the current prediction I needed a way to quickly store and release the last N frames of the video stream. <b>Redis</b> perfectly fit this role as I&apos;d be able to quickly set the incoming frames and freeing the previous frames automatically both in O(1) time.
                        </p>
                        <h4 className="text">Backend</h4>
                        <p className="project-p">
                            Despite having experience with Flask and it working for the job at hand, I&apos;d opted to use <b>Fast API</b> for it&apos;s faster response times, integrated web-sockets / async made this an obvious choice.
                        </p>
                        <h4 className="text">AI Framework</h4>
                        <p className="project-p">
                            PyTorch was used despite having prior experience with TensorFlow as I&apos;d wanted to explore more offerings & it was the framework of choice for Tesla&apos;s AutoPilot vision.
                        </p>
                    </div>
                    <div className="project-tech-banner" style={{marginBottom: '15px'}}>
                        <Image className="project-image" src="/imgs/logos/next.png" width={300} height={300} alt="next JS Logo"/>
                        <Image className="project-image" src="/imgs/logos/pb.png" width={300} height={300} alt="Pocketbase Logo"/>
                        <Image className="project-image" src="/imgs/logos/fastapi.png" width={300} height={300} alt="FastAPI Logo"/>
                    </div>
                   
                    <div className="about-text padd-15" style={{width: "100%", marginBottom: "1rem"}}>
                        <h3>Hardware</h3>
                        <p>
                            Originally opting to use a <b>Pi-Pico W</b> with a <b>SPI Camera</b> due to budget constraints and *theoretically acceptable performance for uploading images. This idea was quickly scrapped after running into many issues with the SPI interface and the manufacturer&apos;s recommended interpretation of the output bytes did not translate into a valid JPG image.
                            <br/><br/>
                            Due to this and my focus on the AI aspect of the project I&apos;d opted to use the recently released <b>Raspberry Pi 5</b> joined with a <b>Raspberry Pi-Cam V2</b>.
                        </p>
                    </div>
                    <div className="project-tech-banner" style={{marginBottom: '15px'}}>
                        <Image className="project-image" src="/imgs/portfolio/SocialStatus/picam.png" width={300} height={300} alt="Picam Image"/>
                        <Image className="project-image" src="/imgs/logos/pb.png" width={300} height={300} alt="Raspberry Pi 5"/>
                        <Image className="project-image" src="/imgs/logos/socketio.png" width={300} height={300} alt="Raspberry Pi Pico W"/>
                    </div>

                    <div className="about-text padd-15" style={{width: '100%'}}>
                        <h3 className="project-header text" style={{marginBottom: '15px'}}>Video Stream Output</h3>
                        <ImageNText 
                        text={
                            <>
                                After sorting out the kinks with the PiCamera interface I was so invested I&apos;d wanted to stream bytes directly to the server, pulling the individual frames out from the stream for storage as SQL byte blobs. 
                                However, my stern-headedness would only go so far, as I eventually ditched the over-engineered grandious notions and stuck with what worked, which ultimately looked something like FFMPEG with extra headers.
                                <br/> <br/>
                                In my implimentation the <b>Raspberry Pi 5</b> is solely responsible for image capture and my <b>Linux server</b> would be solely responsible for distribution of the AI-processed video stream to connected clients. 
                            </>
                        }
                        right={false}
                        video={true}
                        img="/imgs/portfolio/SocialStatus/video.mp4"
                        />
                        <p className="" style={{marginBottom: '15px'}}>
                            The isolation of responsiblities worked really in keeping things <b>FAST</b>, getting up to 60fps on the end client just via unbatched HTTP POST requests alone. 
                            This also prevented catostophic failure if the camera host or server went down, as the server and Pi were not dependent on one another and would restart as soon as the other came back online.
                        </p>
                    </div>
                    <div className="about-text padd-15" style={{width: "100%", marginBottom: "1rem"}}>
                        <h3>Training</h3>
                        <p>
                            By far my favorite part of the process, training proved to be the hardest & most rewarding aspect of this project, even still in my free time there&apos;s an ongoing effort to perfect the model.   
                        </p>
                        <p>
                            Originally opting to use a <b>Pi-Pico W</b> with a <b>SPI Camera</b> due to budget constraints and *theoretically acceptable performance for uploading images. This idea was quickly scrapped after running into many issues with the SPI interface and the manufacturer&apos;s recommended interpretation of the output bytes did not translate into a valid JPG image.
                            <br/><br/>
                            Due to this and my focus on the AI aspect of the project I&apos;d opted to use the recently released <b>Raspberry Pi 5</b> joined with a <b>Raspberry Pi-Cam V2</b>.
                        </p>
                    </div>
                    <div className="about-text padd-15" style={{width: '100%'}}>
                        {/* <h3 className="project-header text" style={{marginBottom: '15px'}}>What was <span className="project-subheader">really built</span> and Conclusion</h3> */}
                        {/* <p className="project-p">
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
                        </p> */}
                    </div>
                </div>
                
            </div>
        </div>
    </>
    );
}