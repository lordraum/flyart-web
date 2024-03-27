import PropTypes from 'prop-types'

function Button ({ classModificators }) {
  return (
    <a href='#' className={`button ${classModificators}`}>
      Contactar
    </a>
  )
}

Button.propTypes = {
  classModificators: PropTypes.string
}

export default Button
