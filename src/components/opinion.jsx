import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Opinion ({ img, person, occupation, text, link }) {
  return (
    <article className="opinion">
      <div className="opinion__header">
        <Link to={`${link ?? '#'}`}></Link>
          <img src={img} alt='review person avatar' className="opinion__avatar" />
        <h4 className="opinion__person">{person}</h4>
        <p className="opinion__occupation">{occupation}</p>
      </div>
      <div className="opinion__body">
        <p className="opinion__text">{text}</p>
      </div>
    </article>
  )
}

Opinion.propTypes = {
  img: Proptypes.string.isRequired,
  person: Proptypes.string.isRequired,
  occupation: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  link: Proptypes.string
}
