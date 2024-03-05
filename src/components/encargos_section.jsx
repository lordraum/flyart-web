import Proptypes from 'prop-types'
import { FaChevronCircleRight } from 'react-icons/fa'
import image from '../assets/obra_opt.webp'

export default function EncargosSection ({ title, description }) {
  return (
    <section className="encargos">
      <h2 className="encargos__title"><a href="#">{title}</a></h2>
      <p className="encargos__description">{description}</p>
      <article className="encargos__gallery">
        <div className="controls">
        <FaChevronCircleRight />
        <FaChevronCircleRight />
        </div>
        <section className="encargos__images">
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
        </section>
      </article>
    </section>

  )
}

EncargosSection.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}
