import PropTypes from 'prop-types'

export default function Evento ({ img, alt, title, description, link }) {
  return (
    <article className="expo">
      <img src={img} alt={alt} className="expo__img" />
      <h3 className="expo__title"><a href={link} className="expo__link">{title}</a>
        </h3>
      <p className="expo__description">{description}</p>
    </article>
  )
}

Evento.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}
