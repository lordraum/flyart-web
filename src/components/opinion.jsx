import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Container = ({ children, link }) =>
  <>
  { link
    ? <Link to={link}>{children}</Link>
    : <>{children}</> }
  </>

export default function Opinion ({ img, person, occupation, text, link }) {
  return (
    <article className="opinion">
      <Container link={link}>
      <div className="opinion__header">
          <img src={img} alt='review person avatar' className="opinion__avatar" />
        <h4 className="opinion__person">{person}</h4>
        <p className="opinion__occupation">{occupation}</p>
      </div>
      <div className="opinion__body">
        <p className="opinion__text">{text}</p>
      </div>
      </Container>
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
