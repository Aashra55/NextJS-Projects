import Link from "next/link"
export default function Header(){
    return(
        <div>
        <ul className="header">
          <li className="myname">Aash</li>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'./about-us'}><li>About</li></Link>
          <Link href={'./blog'}><li>Blog</li></Link>
          <Link href={'./contact'}><li>Contact</li></Link>
        </ul>
        </div>
    )
}