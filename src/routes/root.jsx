import PropTypes from 'prop-types'
import SiteHeader from '../components/site_header'
import SiteFooter from '../components/site_footer'

export default function Root ({ children }) {
  return <>
  <SiteHeader
    person={'Johan Gómez'}
    occupation={'Artista Plástico'}
    slogan={'"El dibujo es un engaño Mágico"'}
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
