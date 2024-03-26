import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Obra ({ image, altAttr, title, tecnique }) {
  return (
    <article className='obra'>
      <div className='obra__img-box'>
        <Link to='#'>
          <img
            src={image}
            alt={altAttr}
            className='obra__img'
          />
        </Link>
      </div>
      <div className='obra__info' role='contentinfo' aria-label='card-body'>
        <h3 className='obra__title'>
          <Link to='#'>{title}</Link>
        </h3>
        <p className='obra__tecnique'>{tecnique}</p>
      </div>
    </article>
  )
}

Obra.propTypes = {
  image: Proptypes.string,
  altAttr: Proptypes.string,
  title: Proptypes.string,
  tecnique: Proptypes.string
}
