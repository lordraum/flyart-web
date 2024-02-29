import Proptypes from 'prop-types'

export default function Obra ({ image, altAttr, title, tecnique }) {
  return <article className="obra">
    <picture className="obra__img-box">
      <img src={image} alt={altAttr} className="obra__img" />
    </picture>
    <div className="obra__info" role='contentinfo' aria-label='card-body'>
      <h3 className="obra__title">{title}</h3>
      <p className="tecnique">{tecnique}</p>
    </div>
  </article>
}

Obra.propTypes = {
  image: Proptypes.string,
  altAttr: Proptypes.string,
  title: Proptypes.string,
  tecnique: Proptypes.string
}
