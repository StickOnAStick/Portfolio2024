import Link from "next/link";

export interface BlogItemProps {
    img: {
        src: string;
        alt: string;
    };
    date: string;
    title: string;
    para: string;
    tags: string[];
    path: string;
};

export default function BlogItem(props: BlogItemProps){
    
    return (
    <Link href={`/blog/${props.path}`} className="blog-item padd-15">
        <div className="blog-item-inner shadow-dark">
            <div className="blog-img">
                <img src={props.img.src} alt={props.img.alt} />
                <div className="blog-date">{props.date}</div>
            </div>
            <div className="blog-info">
                <h4 className="blog-title">
                    {props.title}
                </h4>
                <p className="blog-description">
                    {props.para}
                </p>
                <p className="blog-tags">
                Tags: {
                    props.tags.map((tag: string, index: number) => {
                        return <a key={`${tag}-${index}`} href="#">{tag} </a>
                    })
                }
                </p>
            </div>
        </div>
    </Link>
    );
}