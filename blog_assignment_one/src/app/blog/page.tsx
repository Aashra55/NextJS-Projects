import Link from "next/link";
import Header from "../components/header";

export default function blog(){
    return(
        <div className="blog-parent-container">
            <Header/>
            <h1>SIMPLE PRODUCTIVITY HACKS FOR BETTER MANAGEMENT</h1>
            <div className="blog-container">
                <div className="blog jello-vertical">
                    <div className="blog-image-one"></div>
                    <div className="blog-title">Prioritizing Tasks Effectively</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <Link href={'./article-one'} ><button className="join read">Read More</button></Link>
                </div>
                <div className="blog jello-vertical">
                    <div className="blog-image-two"></div>
                    <div className="blog-title">Avoiding Distractions and Minimizing Procrastination</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.</div>
                    <Link href={'./article-two'} ><button className="join read">Read More</button></Link>
                </div>
                <div className="blog jello-vertical">
                    <div className="blog-image-three"></div>
                    <div className="blog-title">Effective Scheduling and Planning</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.</div>
                    <Link href={'./article-three'} ><button className="join read">Read More</button></Link>
                </div>
                <div className="blog jello-vertical">
                    <div className="blog-image-four"></div>
                    <div className="blog-title">Optimizing Your Digital Life</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe nequeLorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque</div>
                    <Link href={'./article-four'} ><button className="join read">Read More</button></Link>
                </div>
                <div className="blog jello-vertical">
                    <div className="blog-image-five"></div>
                    <div className="blog-title">Creating a Conducting Work Environment</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.</div>
                    <Link href={'./article-five'} ><button className="join read">Read More</button></Link>
                </div>
                <div className="blog jello-vertical">
                    <div className="blog-image-six"></div>
                    <div className="blog-title">Maintaining Motivation and Focus</div>
                    <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta saepe neque.</div>
                    <Link href={'./article-six'} ><button className="join read">Read More</button></Link>
                </div>
            </div>
        </div>
    )
}
