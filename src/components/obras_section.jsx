import obraImage from '../assets/obra_opt.webp'
import Obra from './obra'

const obras = [
  {
    id: '01',
    image: obraImage,
    altAttr: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Autoretrato # 10',
    tecnique: 'Tinta sobre papel'
  },
  {
    id: '02',
    image: obraImage,
    altAttr: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Autoretrato # 10',
    tecnique: 'Tinta sobre papel'
  },
  {
    id: '03',
    image: obraImage,
    altAttr: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Autoretrato # 10',
    tecnique: 'Tinta sobre papel'
  },
  {
    id: '04',
    image: obraImage,
    altAttr: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Autoretrato # 10',
    tecnique: 'Tinta sobre papel'
  }
]

export default function ObrasSection () {
  return (
    <section className="obras">
      <h2>Obras</h2>
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
    </section>)
}
