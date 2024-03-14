import Expo from './Expo'

const eventos = [
  {
    id: '01',
    img: 'https://plus.unsplash.com/premium_photo-1661891971862-7c29e40a2eaf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwb3NpY2lvbmVzJTIwYXJ0ZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Arte en la calle - Exposición urbana',
    title: 'Arte en la calle',
    description: 'Exposición urbana que transforma las calles de la ciudad en galerías al aire libre. Artistas locales y emergentes muestran su creatividad en murales y obras efímeras, convirtiendo los espacios públicos en lugares de encuentro y reflexión.',
    link: 'https://www.example.com/evento1'
  },
  {
    id: '02',
    img: 'https://plus.unsplash.com/premium_photo-1683140774972-e2859e1515b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhwb3NpY2lvbmVzJTIwYXJ0ZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Renacimiento: Explorando el arte clásico',
    title: 'Renacimiento: Explorando el arte clásico',
    description: 'Una exposición que ofrece una mirada profunda al arte renacentista, explorando las obras maestras de artistas como Leonardo da Vinci, Michelangelo y Rafael. Una oportunidad única para sumergirse en la belleza y la técnica de esta época dorada del arte.',
    link: 'https://www.example.com/evento2'
  },
  {
    id: '03',
    img: 'https://images.unsplash.com/photo-1689972204860-10e3a34be10e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXhwb3NpY2lvbmVzJTIwYXJ0ZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Arte y tecnología: Una fusión innovadora',
    title: 'Arte y tecnología: Una fusión innovadora',
    description: 'Esta exposición desafía los límites entre el arte tradicional y la tecnología moderna. Explora instalaciones interactivas, realidad virtual, y obras generadas por inteligencia artificial, ofreciendo una experiencia artística única e inmersiva.',
    link: 'https://www.example.com/evento3'
  },
  {
    id: '04',
    img: 'https://plus.unsplash.com/premium_photo-1682088715035-11e11e28f50f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXhwb3NpY2lvbmVzJTIwYXJ0ZXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Simetría y caos: Una mirada al arte contemporáneo',
    title: 'Simetría y caos: Una mirada al arte contemporáneo',
    description: 'Una exposición que examina la complejidad del arte contemporáneo, desde obras minimalistas hasta expresionismo abstracto. Explora cómo los artistas contemporáneos juegan con la simetría y el caos para crear nuevas formas de expresión artística.',
    link: 'https://www.example.com/evento4'
  },
  {
    id: '05',
    img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4cG9zaWNpb25lcyUyMGFydGV8ZW58MHx8MHx8fDA%3D',
    alt: 'El arte de la naturaleza: Inspiración y creatividad',
    title: 'El arte de la naturaleza: Inspiración y creatividad',
    description: 'Una exposición que celebra la belleza y la diversidad del mundo natural a través del arte. Desde paisajes impresionistas hasta esculturas botánicas, descubre cómo los artistas encuentran inspiración en la naturaleza y la transforman en obras de arte.',
    link: 'https://www.example.com/evento5'
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
