import Obra from './Obra'
import { useFetch } from '../useFetch'

export default function ObrasSection () {
  const { data: obras } = useFetch('http://localhost:1234/obras')
  console.log(obras)
  return (
    <section className='obras'>
      <h2><a href='#'>Obras</a></h2>
      <div className='obras__box'>
        {
        obras?.map(({ id, image, altAttr, title, tecnique }) =>
          <Obra
            key={id}
            image={image}
            altAttr={altAttr}
            title={title}
            tecnique={tecnique}
          />
        )
        }
      </div>
    </section>
  )
}
