import ObrasSection from '../components/obras_section'
import EventosSection from '../components/eventos_section'
import EncargosSection from '../components/encargos_section'
import OpinionesSection from '../components/opiniones_section'
import Root from './root'

const title = 'Lorem ipsum dolor sit amet consectetur.'
const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis facere voluptatibus tempore vel asperiores. Maiores quia dolore odit tempore saepe fugiat iusto ducimus omnis, voluptatum qui officiis praesentium quo?'

export default function Inicio () {
  return <>
    <Root>
      <ObrasSection />
      <EventosSection/>
      <EncargosSection title={title} description={paragraph}/>
      <OpinionesSection />
    </Root>
  </>
}

/*
Sections --> html / styles / js
- Obras [x] [] []
- Eventos? [x] [] []
- Encargos [x] [] []
- Opiniones [] [] []
- SEO Text [] [] []
*/
