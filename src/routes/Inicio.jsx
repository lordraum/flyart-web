import ObrasSection from '../components/obras_section'
import ExposSection from '../components/expos_section'
import EncargosSection from '../components/encargos_section'
import OpinionesSection from '../components/opiniones_section'
import SEOText from '../components/seo_text'
import Root from './root'

const encargosTitle = 'Transforma tus sueños en arte: ¡Haz tu encargo personalizado ahora!'
const encargosParagraph = 'Explora la magia de transformar tu visión en una obra de arte tangible con nuestros encargos personalizados. Desde la primera chispa de inspiración hasta la entrega final, te guiamos a través de un viaje artístico único. Comenzamos con una consulta creativa, donde colaboramos estrechamente para comprender tus deseos y necesidades. Luego, nuestro talentoso artista da vida a tu idea con habilidad y pasión, capturando cada detalle con precisión. Finalmente, te entregamos una pieza única que refleja tu personalidad y estilo. ¡Haz realidad tus sueños artísticos hoy mismo con nosotros!'
const inicioSeoText = 'Sumérgete en el mundo del arte bogotano con la cautivadora obra de nuestro talentoso artista. Sus creaciones reflejan la esencia y diversidad cultural de Colombia, capturando la atención con cada pincelada. Explora nuestra galería y déjate inspirar por la vibrante creatividad que emana de cada pieza. Desde paisajes impresionantes hasta retratos evocadores, cada obra es una ventana a la rica herencia artística de Bogotá. ¡Descubre la pasión y el talento que define a nuestro artista bogotano y déjate envolver por su cautivador universo visual!'

export default function Inicio () {
  return <>
    <Root>
      <ObrasSection />
      <ExposSection/>
      <EncargosSection title={encargosTitle} description={encargosParagraph}/>
      <OpinionesSection />
      <SEOText
        title='Johan Gómez. Artista Plástico Colombiano.'
        text={inicioSeoText}
        link={'/acerca-de'}
      />
    </Root>
  </>
}

/* SEOText.propTypes = {
  title: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired
} */
