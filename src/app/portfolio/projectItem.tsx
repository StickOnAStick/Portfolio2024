import Link from "next/link";

export interface ProjectItemProps {
    proj_link: string;
    img: string;
    img_alt: string;
    title: string;
    list?: string[];
    category: string;
}

export default function ProjectItem(props: ProjectItemProps){
    return(
    <Link href={props.proj_link} className="portfolio-item padd-15" data-category={props.category}>
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src={props.img} alt={props.img_alt}/>
          </div>
          <div className="portfolio-info">
            <h4>{props.title}</h4>
            <br/>
            <h6>
              <ul>
                {props.list?.map((list_item: string, index: number) => {
                    return <li key={props.title+"_"+index}>{list_item}</li>
                })}
              </ul>
            </h6>
            <div className="icon">
              <i className="fa fa-search" />
            </div>
          </div>
        </div>
    </Link>
    );
}