import Proptypes from 'prop-types'

export default function SEOText ({ title, text }) {
  return (
    <section className="seo-text-box">
      <h2 className="seo-title">{title}</h2>
      <h2 className="seo-text">{text}</h2>
    </section>
  )
}

SEOText.propTypes = {
  title: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired
}
