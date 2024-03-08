import Expo from './expo'
import imgLaPazAnte from '../assets/flyart_exposición_la_paz_ante_tus_ojos.webp'

const eventos = [
  {
    id: '01',
    img: imgLaPazAnte,
    alt: 'Johan Gómez "Flyart" en la exposicón La Paz Ante Mis Ojos',
    title: 'La Paz Ante Mis Ojos',
    description: 'Exposición realizada en Bogotá en el congreso de la república, cuyo objetivo fue resaltar la belleza de nuestro país a través de historias que reflejen diversas realidades y culturas, mostrando cómo las identidades renacen, los paisajes florecen de nuevo y nos conectan con nuestra tierra, inspirándonos a vivir en armonía y recordándonos la calidez en nuestros corazones.',
    link: 'https://www.artradelatam.com/single-collection/la-paz-ante-mis-ojos'
  },
  {
    id: '02',
    img: imgLaPazAnte,
    alt: 'Johan Gómez "Flyart" en la exposicón La Paz Ante Mis Ojos',
    title: 'La Paz Ante Mis Ojos',
    description: 'Exposición realizada en Bogotá en el congreso de la república, cuyo objetivo fue resaltar la belleza de nuestro país a través de historias que reflejen diversas realidades y culturas, mostrando cómo las identidades renacen, los paisajes florecen de nuevo y nos conectan con nuestra tierra, inspirándonos a vivir en armonía y recordándonos la calidez en nuestros corazones.'
  },
  {
    id: '03',
    img: imgLaPazAnte,
    alt: 'Johan Gómez "Flyart" en la exposicón La Paz Ante Mis Ojos',
    title: 'La Paz Ante Mis Ojos',
    description: 'Exposición realizada en Bogotá en el congreso de la república, cuyo objetivo fue resaltar la belleza de nuestro país a través de historias que reflejen diversas realidades y culturas, mostrando cómo las identidades renacen, los paisajes florecen de nuevo y nos conectan con nuestra tierra, inspirándonos a vivir en armonía y recordándonos la calidez en nuestros corazones.',
    link: 'https://www.artradelatam.com/single-collection/la-paz-ante-mis-ojos'
  },
  {
    id: '04',
    img: imgLaPazAnte,
    alt: 'Johan Gómez "Flyart" en la exposicón La Paz Ante Mis Ojos',
    title: 'La Paz Ante Mis Ojos',
    description: 'Exposición realizada en Bogotá en el congreso de la república, cuyo objetivo fue resaltar la belleza de nuestro país a través de historias que reflejen diversas realidades y culturas, mostrando cómo las identidades renacen, los paisajes florecen de nuevo y nos conectan con nuestra tierra, inspirándonos a vivir en armonía y recordándonos la calidez en nuestros corazones.',
    link: 'https://www.artradelatam.com/single-collection/la-paz-ante-mis-ojos'
  }
]

export default function ExposSection () {
  return (
    <section className="expos">
      <h2><a href="#">Exposiciones</a></h2>
      <div className="expos__box">
      {
        eventos.map(({ id, img, alt, title, description, link }) => {
          return <Expo
          key={id}
          img={img}
          alt={alt}
          title={title}
          description={description}
          link={link}
          />
        })
      }
      </div>
    </section>)
}
