// Este slider es para utilizar con controles, para el scroll se utiliza scroll-snap en css

import PropTypes from 'prop-types'

import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import { useRef } from 'react'

export default function ImageSlider ({ children }) {
  const imagesRef = useRef()

  const handleClick = (direction) => {
    if (imagesRef.current) {
      const slideWidth = imagesRef.current.clientWidth
      const scrollLeft = imagesRef.current.scrollLeft
      const offset = direction === 'left' ? -slideWidth : slideWidth
      imagesRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      })
    }
  }
  return (
    <article className="image-slider">
        <div className="image-slider__controls">
          <FaChevronCircleLeft
            onClick={() => handleClick('left')}
            data-chevron="left"
            className='image-slider__chevron'/>
          <FaChevronCircleRight
            onClick={() => handleClick('right')}data-chevron="right"
            className='image-slider__chevron'/>
        </div>
        <div
          ref={imagesRef}
          className="image-slider__images"
        >
          {children}
          {/* <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" />
          <img src={image} alt="sfd" /> */}
        </div>
      </article>
  )
}

ImageSlider.propTypes = {
  children: PropTypes.array
}
