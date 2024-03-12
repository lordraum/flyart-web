import ObrasSection from '../components/obras_section'
import ExposSection from '../components/expos_section'
import EncargosSection from '../components/encargos_section'
import OpinionesSection from '../components/opiniones_section'
import SEOText from '../components/seo_text'
import Root from './root'

const inicioSeoText = 'Sumérgete en el mundo del arte bogotano con la cautivadora obra de nuestro talentoso artista. Sus creaciones reflejan la esencia y diversidad cultural de Colombia, capturando la atención con cada pincelada. Explora nuestra galería y déjate inspirar por la vibrante creatividad que emana de cada pieza. Desde paisajes impresionantes hasta retratos evocadores, cada obra es una ventana a la rica herencia artística de Bogotá. ¡Descubre la pasión y el talento que define a nuestro artista bogotano y déjate envolver por su cautivador universo visual!'

export default function Inicio () {
  return <>
    <Root>
      <ObrasSection />
      <ExposSection/>
      <EncargosSection />
      <OpinionesSection />
      <SEOText
        title='Johan Gómez. Artista Plástico Colombiano.'
        text={inicioSeoText}
        link={'/acerca-de'}
      />
    </Root>
  </>
}
