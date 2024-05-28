import Image from "next/image";
export interface ImageNTextProps {
    text: string;
    second_text?: string;
    img: string;
    right?: boolean; // Left or right, if undefined / false left else right
    darkOrLightBorder?: boolean; //1 dark, 0 default
}
export default function ImageNText(props: ImageNTextProps){
    return (
        <div className="projectImageNText">
            {
                props.right ? 
            <>
                <div className="projectImageNText-Item">
                    <Image className="projectImageNText-wrapper"  src={props.img} height={300} width={300} alt="concepts"/>
                </div>
                <div className="projectImageNText-content projectImageNText-Item project-p">
                    <p>{props.text}</p>
                    <p>{props.second_text}</p>
                </div>
            </>
            :
            <>
                <div className="projectImageNText-content project-p">
                    <p>{props.text}</p>
                    <p>{props.second_text}</p>
                </div>
                <Image className="projectImageNText-wrapper"  src={props.img} height={300} width={300} alt="concepts"/>
            </>
            }
        </div>
    );
}