import Proptypes from 'prop-types'

export default function Obra ({ image, altAttr, title, tecnique }) {
  return <article className="obra">
    <div className="obra__img-box">
      <img src={image} alt={altAttr} className="obra__img" />
    </div>
    <div className="obra__info" role='contentinfo' aria-label='card-body'>
      <h3 className="obra__title">
        <a href="#">{title}</a></h3>
      <p className="obra__tecnique">{tecnique}</p>
    </div>
  </article>
}

Obra.propTypes = {
  image: Proptypes.string,
  altAttr: Proptypes.string,
  title: Proptypes.string,
  tecnique: Proptypes.string
}
