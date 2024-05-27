import Image from "next/image";
export interface ImageNTextProps {
    text: string;
    second_text?: string;
    img: string;
}
export default function ImageNText(props: ImageNTextProps){
    return (
        <div className="projectImageNText">
            <div className="projectImageNText-content project-p">
                <p>{props.text}</p>
                <p>{props.second_text}</p>
            </div>
            <Image className="projectImageNText-wrapper"  src={props.img} height={300} width={300} alt="concepts"/>
        </div>
    );
}