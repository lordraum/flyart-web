import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'

const title = 'Transforma tus sueños en arte: ¡Haz tu encargo personalizado ahora!'

const description = 'Explora la magia de transformar tu visión en una obra de arte tangible con nuestros encargos personalizados. Desde la primera chispa de inspiración hasta la entrega final, te guiamos a través de un viaje artístico único. Comenzamos con una consulta creativa, donde colaboramos estrechamente para comprender tus deseos y necesidades. Luego, nuestro talentoso artista da vida a tu idea con habilidad y pasión, capturando cada detalle con precisión. Finalmente, te entregamos una pieza única que refleja tu personalidad y estilo. ¡Haz realidad tus sueños artísticos hoy mismo con nosotros!'

const images = [
  'https://images.unsplash.com/photo-1588786849373-642245e7bd15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673814842168-ed452b1f0b99?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1609189184127-04652523de91?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0aXN0YXxlbnwwfHwwfHx8MA%3D%3D'

]

export default function EncargosSection () {
  return (
    <section className='encargos'>
      <h2 className='encargos__title'><Link to='#'>{title}</Link></h2>
      <p className='encargos__description'>{description}</p>
      <a href='#' className='button'>
        Contactar
      </a>
      <ImageSlider
        title={title}
        description={description}
      >
        {images.map((image) =>
          <img key={image} src={image} alt='Temporary image' />
        )}
      </ImageSlider>
    </section>
  )
}
