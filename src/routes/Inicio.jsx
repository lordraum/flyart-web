import Root from './root'
import obraImage from '../assets/obra_opt.webp'
import Obra from '../components/obra'

const obraExample = {
  image: obraImage,
  altAttr: 'Lorem ipsum dolor sit amet consectetur.',
  title: 'Autoretrato # 10',
  tecnique: 'Tinta sobre papel'
}

const obras = [obraExample, obraExample, obraExample, obraExample]

export default function Inicio () {
  return <>
    <Root>
      <section className="obras">
        {
          obras.map(({ image, altAttr, title, tecnique }) => {
            return <Obra
            key={title}
            image={image}
            altAttr={altAttr}
            title={title}
            tecnique={tecnique}
            />
          })
        }
      </section>
    </Root>
  </>
}
