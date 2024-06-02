export default function ProjectLayout({
    children,
    params
}:{
    children: React.ReactNode
    params: {
        tag: string //proj
        item: string // aux-battles, socialstatus, etc...
    }
}){

    return (
    <section className="section portfolio" id={"portfolio/"+params.tag}>
        <div className="container">
            {children}
        </div>
    </section>
    );
}