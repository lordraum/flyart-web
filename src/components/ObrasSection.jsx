import Obra from './Obra'

const obras = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww',
    altAttr: 'Travesía de sueños - Óleo sobre lienzo',
    title: 'Travesía de sueños',
    tecnique: 'Óleo sobre lienzo'
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww',
    altAttr: 'Reverberación etérea - Acuarela sobre papel',
    title: 'Reverberación etérea',
    tecnique: 'Acuarela sobre papel'
  },
  {
    id: '03',
    image: 'https://plus.unsplash.com/premium_photo-1670426502372-4df89a7bf598?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww',
    altAttr: 'Ecos del silencio - Tinta china sobre papel',
    title: 'Ecos del silencio',
    tecnique: 'Tinta china sobre papel'
  },
  {
    id: '04',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww',
    altAttr: 'Melodía de los recuerdos - Pastel sobre papel',
    title: 'Melodía de los recuerdos',
    tecnique: 'Pastel sobre papel'
  },
  {
    id: '05',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww',
    altAttr: 'Sinfonía de la quietud - Escultura en bronce',
    title: 'Sinfonía de la quietud',
    tecnique: 'Escultura en bronce'
  },
  {
    id: '06',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHx8MA%3D%3D',
    altAttr: 'Susurros de la noche - Fotografía',
    title: 'Susurros de la noche',
    tecnique: 'Fotografía'
  }
]

export default function ObrasSection () {
  return (
    <section className='obras'>
      <h2><a href='#'>Obras</a></h2>
      <div className='obras__box'>
        {
        obras.map(({ id, image, altAttr, title, tecnique }) =>
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
