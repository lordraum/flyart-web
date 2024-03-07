import PropTypes from 'prop-types'
import { FaChevronCircleRight } from 'react-icons/fa'
import image from '../assets/obra_opt.webp'
import { useRef } from 'react'

export default function EncargosSection ({ title, description }) {
  const galleryRef = useRef()

  const handleClick = (direction) => {
    if (galleryRef.current) {
      const slideWidth = galleryRef.current.clientWidth
      const scrollLeft = galleryRef.current.scrollLeft
      const offset = direction === 'left' ? -slideWidth : slideWidth
      galleryRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="encargos">
      <h2 className="encargos__title"><a href="#">{title}</a></h2>
      <p className="encargos__description">{description}</p>
      <article className="encargos__gallery">
        <div className="encargos__controls">
          <FaChevronCircleRight
            onClick={() => handleClick('left')}
            data-chevron="left"
            className='encargos__chevron encargos__chevron--left'/>
          <FaChevronCircleRight
            onClick={() => handleClick('right')}data-chevron="right"
            className='encargos__chevron'/>
        </div>
        <div
          ref={galleryRef}
          className="encargos__images"
        >
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
        </div>
      </article>
    </section>
  )
}

EncargosSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
