import { CiInstagram, CiFacebook } from 'react-icons/ci'
import { RiThreadsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function SiteFooter () {
  return <footer className="footer">
    <Link to='#'><CiInstagram /></Link>
    <Link to='#'><CiFacebook /></Link>
    <Link to='#'><RiThreadsFill /></Link>
    <p className="copy">
      Laguneta Design, Bogotá Col 2024 ©
    </p>
  </footer>
}
