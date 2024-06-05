import Image from "next/image";
export interface ImageNTextProps {
    text: string | React.ReactNode;
    second_text?: string | React.ReactNode;
    img: string;
    right?: boolean; // Left or right, if undefined / false left else right
    darkOrLightBorder?: boolean; //1 dark, 0 default
    video?: boolean;
}
export default function ImageNText(props: ImageNTextProps){
    return (
        <div className="projectImageNText">
            {
                props.right ? 
            <>
                {
                    props.video ? 
                    <video className="projectImageNText-image" width={575} height={323} autoPlay controls loop preload="none">
                        <source src={props.img} type="video/mp4"/>
                    </video>
                    :
                    <Image className="projectImageNText-image"  src={props.img} height={300} width={300} alt="concepts"/>
                }
                <div className="projectImageNText-text project-p">
                    <p>{props.text}</p>
                    <p>{props.second_text}</p>
                </div>
            </>
            :
            <>
                <div className="projectImageNText-text project-p">
                    <p>{props.text}</p>
                    <p>{props.second_text}</p>
                </div>
                {
                    props.video ? 
                    <video className="projectImageNText-image" width={575} height={323} loop controls autoPlay preload="none">
                        <source src={props.img} type="video/mp4"/>
                    </video>
                    :
                    <Image className="projectImageNText-image"  src={props.img} height={300} width={300} alt="concepts"/>
                }
            </>
            }
        </div>
    );
}