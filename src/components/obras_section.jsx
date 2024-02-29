import obraImage from '../assets/obra_opt.webp'
import Obra from './obra'

const obraExample = {
  image: obraImage,
  altAttr: 'Lorem ipsum dolor sit amet consectetur.',
  title: 'Autoretrato # 10',
  tecnique: 'Tinta sobre papel'
}

const obras = [obraExample, obraExample, obraExample, obraExample]

export default function ObrasSection () {
  return <section className="obras">
      {
        obras.map(({ image, altAttr, title, tecnique }) => {
          return <Obra
          key={crypto.randomUUID()}
          image={image}
          altAttr={altAttr}
          title={title}
          tecnique={tecnique}
          />
        })
      }
    </section>
}
