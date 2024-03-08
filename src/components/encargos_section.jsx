import image from '../assets/obra_opt.webp'
import { Link } from 'react-router-dom'
import ImageSlider from './image_slider'

const title = 'Transforma tus sueños en arte: ¡Haz tu encargo personalizado ahora!'

const description = 'Explora la magia de transformar tu visión en una obra de arte tangible con nuestros encargos personalizados. Desde la primera chispa de inspiración hasta la entrega final, te guiamos a través de un viaje artístico único. Comenzamos con una consulta creativa, donde colaboramos estrechamente para comprender tus deseos y necesidades. Luego, nuestro talentoso artista da vida a tu idea con habilidad y pasión, capturando cada detalle con precisión. Finalmente, te entregamos una pieza única que refleja tu personalidad y estilo. ¡Haz realidad tus sueños artísticos hoy mismo con nosotros!'

export default function EncargosSection () {
  return (
    <section className="encargos">
      <h2 className="encargos__title"><Link to="#">{title}</Link></h2>
      <p className="encargos__description">{description}</p>
      <ImageSlider
      title={title}
      description={description}
      >
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
        <img src={image} alt="sfd" />
      </ImageSlider>
    </section>
  )
}
