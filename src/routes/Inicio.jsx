import ObrasSection from '../components/obras_section'
import EventosSection from '../components/eventos_section'
import Root from './root'

export default function Inicio () {
  return <>
    <Root>
      <ObrasSection />
      <EventosSection/>
    </Root>
  </>
}
