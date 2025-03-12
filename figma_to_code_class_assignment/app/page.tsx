import Image from "next/image";
import favorites from "../app/images/Favorites.png";
import user from "../app/images/User.png";
import cart from "../app/images/Cart1.png";
import title from "../app/images/Titles.png";
import logo from "../app/images/Logo.png";
import search from "../app/images/Search.png";
import iphone from "../app/images/Iphone Image.png";

export default function Home(){
  return(
    <div className="container">
    <div className="header">
      <div className="logo">
        <Image src={logo} width={100} height={100} alt=""/>
      </div>
      <div className="search-bar">
        <div className="search-icon">
          <Image src={search} alt="" width={100} height={100}/>
        </div>
        <input type="text" className="input" placeholder="Search"/>
      </div>
        <ul className="links">
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      <div className="icons">
        <div className="icon one">
          <Image height={100} width={100} src={favorites} alt=""/>
        </div>
        <div className="icon two">
        <Image height={100} width={100} src={cart} alt=""/>
        </div>
        <div className="icon three">
        <Image height={100} width={100} src={user} alt=""/>
        </div>
      </div>
    </div>
    <div className="main">
      <div className="main-text">
        <div className="title-img">
        <Image height={128} width={714} src={title} alt=""/>
        </div>
        <div className="text">Created to change everything for the better. For everyone</div>
        <button>Shop Now</button>
      </div>
      <div className="main-image">
        <Image src={iphone} alt="" width={420} height={632}/>
      </div>
    </div>
    </div>
  )
}                
