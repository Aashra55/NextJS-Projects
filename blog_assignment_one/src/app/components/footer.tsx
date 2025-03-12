import Link from "next/link"

export function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <h1>Blogs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos impedit enim <br />quaerat atque, laboriosam fugit velit delectus quibusdam sit libero quidem, perspiciatis cum.<br /></p>
            </div>
            <div className="footer-bottom">
        <ul>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'./about-us'}><li>About</li></Link>
          <Link href={'./blog'}><li>Blog</li></Link>
          <Link href={'./contact'}><li>Contact</li></Link>
        </ul>
            </div>
        </div>
    )
}
