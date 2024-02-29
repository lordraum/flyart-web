import Proptypes from 'prop-types'

export default function Obra ({ image, altAttr, title, tecnique }) {
  return <article className="obra">
    <picture className="obra__img-box">
      <img src={image} alt={altAttr} className="obra__img" />
    </picture>
    <body className="obra__info">
      <h3 className="obra__title">{title}</h3>
      <p className="tecnique">{tecnique}</p>
    </body>
  </article>
}

Obra.propTypes = {
  image: Proptypes.string,
  altAttr: Proptypes.string,
  title: Proptypes.string,
  tecnique: Proptypes.string
}
