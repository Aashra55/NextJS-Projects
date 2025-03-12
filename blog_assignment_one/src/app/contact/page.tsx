import Header from "../components/header";

export default function Contact(){
    return(
        <div>
            <Header/>
            <div className="contact-container">
            <div className="contact-right">
                <h1>CONTACT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolore quae provident debitis adipisci veniam velit sed.</p>
            </div>
            <form action="" className="contact-left">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email" />
                <textarea name="" id="" placeholder="Message"></textarea>
                <div className="button"><button className="join submit">Submit</button></div>
            </form>
            </div>
        </div>
    )
}
