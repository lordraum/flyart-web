import { CiInstagram, CiFacebook } from 'react-icons/ci'
import { RiThreadsFill, RiTwitterXFill } from 'react-icons/ri'
import { PiTiktokLogoLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function SiteFooter () {
  return <footer className="footer">
    <div className="footer__box">
    <article className="social-links">
    <Link to='#'><CiInstagram className='social__icon' /></Link>
    <Link to='#'><CiFacebook className='social__icon' /></Link>
    <Link to='#'><RiThreadsFill className='social__icon' /></Link>
    <Link to='#'><PiTiktokLogoLight className='social__icon'/>
    </Link>
    <Link to='#'><RiTwitterXFill className='social__icon' />
    </Link>
    </article>
    <p className="copy">
      Laguneta Design, Bogotá Col 2024 ©
    </p>
    </div>
  </footer>
}
