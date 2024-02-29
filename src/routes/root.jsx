import PropTypes from 'prop-types'
import SiteHeader from '../components/site_header'
import SiteFooter from '../components/site_footer'

export default function Root ({ children }) {
  return <>
  <SiteHeader
    person={'Johan Gómez "Flyart"'}
    occupation={'Artista Plástico'}
    institution={'Universidad Antonio Nariño'}
  />
    <main className="main">
      {children}
    </main>
    <SiteFooter />
  </>
}

Root.propTypes = {
  children: PropTypes.array
}
