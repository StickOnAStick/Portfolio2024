import Image from "next/image";
export default function ImageNText(){
    return (
        <div className="projectImageNText">
            <div className="projectImageNText-content">
                The inital concepts of the game were done by hand. asdasdasdasdasd
            </div>
            <div className="projectImageNText-wrapper">
                <Image  src="/imgs/portfolio/aux-battles/DrawingCropped.jpg" height={300} width={300} alt="concepts"/>

            </div>
        </div>
    );
}