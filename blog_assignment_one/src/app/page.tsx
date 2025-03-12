import Image from "next/image";
import {Poppins} from "next/font/google";
import Link from "next/link";
import myimage from "../app/images/Capture.jpeg";

export default function Home() {
  return (
    <div className="parent-container">
      <div className="left-child">
        <ul>
          <li className="myname">Aash</li>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'./about-us'}><li>About</li></Link>
          <Link href={'./blog'}><li>Blog</li></Link>
          <Link href={'./contact'}><li>Contact</li></Link>
        </ul>
        <div className="welcome">WELCOME</div>
        <h1>I'm Aashra Saleem</h1>
        <h2>Blogger</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quibusdam blanditiis! Atque ut neque molestiae, minus accusamus officia sit odio amet soluta, fugiat sapiente commodi officiis, facere dicta voluptatum eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum et dolorem vitae atque aut.</p>
        <button className="join shake-horizontal">Follow Us</button>
      </div>
      <div className="right-child">
        <div className="btn-container">
        <button>Follow Us</button>
        </div>
        <div className="image-container">
          <Image src={myimage} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
