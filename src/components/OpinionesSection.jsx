import Opinion from './Opinion'
import { useFetch } from '../useFetch'

/* const opiniones = [
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'María López',
    occupation: 'Crítica de arte',
    text: 'Tu trabajo es verdaderamente impresionante. Cada pincelada parece tener vida propia, capturando la esencia de la humanidad con una maestría indiscutible. Estoy fascinada por la forma en que juegas con la luz y la sombra, creando profundidad y emoción en cada lienzo. No puedo esperar para ver más de tu increíble arte.'
  },
  {
    img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'Javier Torres',
    occupation: 'Curador de museo',
    text: 'Me quedé sin palabras al contemplar tu obra. Es como si pudiera sentir la energía que emanaba de cada trazo. Cada pieza cuenta una historia única y poderosa, que deja una impresión duradera en el corazón del espectador. Cada pieza cuenta una historia única y poderosa, que deja una impresión duradera en el corazón del espectador',
    link: 'https://example.com/review2'
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'Ana Gómez',
    occupation: 'Coleccionista de arte',
    text: 'Tu creatividad y talento son asombrosos. Cada una de tus obras es una ventana a un mundo de belleza y expresión. Me siento profundamente inspirada por la forma en que desafías',
    link: 'https://example.com/review3'
  },
  {
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'Pedro Martínez',
    occupation: 'Artista aficionado',
    text: 'Tu obra me ha dejado sin aliento. Es evidente que has invertido no solo tu talento, sino también tu pasión en cada creación. Cada trazo y cada color.',
    link: 'https://example.com/review4'
  },
  {
    img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D',
    person: 'Laura Sánchez',
    occupation: 'Crítica de arte',
    text: 'Tu capacidad para evocar emociones a través de tu arte es extraordinaria. Cada obra es una obra maestra en sí misma, contando historias que trascienden el tiempo y el espacio. Tu uso del color y la composición es verdaderamente magistral, creando una experiencia visual que es tanto estimulante como conmovedora. ¡Espero ver más de tu talento en el futuro!',
    link: 'https://example.com/review5'
  },
  {
    img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'Eduardo Pérez',
    occupation: 'Estudiante de arte',
    text: 'Me siento honrado de poder contemplar tu arte. Cada pieza es una lección en sí misma, enseñándome sobre la belleza y la complejidad del mundo que nos rodea. Tu habilidad para capturar la esencia de un momento en el lienzo es verdaderamente inspiradora. Estoy ansioso por aprender más de ti y tu proceso creativo. Me siento honrado de poder contemplar tu arte. Cada pieza es una lección en sí misma, enseñándome sobre la belleza y la complejidad del mundo que nos rodea. Tu habilidad para capturar la esencia de un momento en el lienzo es verdaderamente inspiradora. Estoy ansioso por aprender más de ti y tu proceso creativo.',
    link: 'https://example.com/review6'
  },
  {
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
    person: 'Marina Fernández',
    occupation: 'Crítica de arte',
    text: 'Tu obra es un testimonio de tu genio artístico. Cada trazo es una declaración audaz, desafiando las expectativas y llevando al espectador en un viaje emocional. ',
    link: 'https://example.com/review7'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D',
    person: 'Daniel González',
    occupation: 'Entusiasta del arte',
    text: 'Tu arte es una celebración de la vida y la creatividad. Cada obra es una explosión de color y energía, reflejando la belleza y la diversidad del mundo que nos rodea. ',
    link: 'https://example.com/review8'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D',
    person: 'Carmen Ruiz',
    occupation: 'Amante del arte',
    text: 'Tu obra es un reflejo de tu alma creativa. Cada pieza es una expresión de tus pensamientos y emociones más profundos, invitando al espectador a unirse a ti en un viaje de ',
    link: 'https://example.com/review9'
  },
  {
    img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D',
    person: 'Pablo Torres',
    occupation: 'Coleccionista de arte',
    text: 'Tu arte es una inspiración para todos los que tienen el privilegio de experimentarlo. Cada obra es una expresión única de tu visión y creatividad, invitando al espectador a contemplar el mundo a través de tus ojos. ',
    link: 'https://example.com/review10'
  }
] */

export default function OpinionesSection () {
  const { data: opiniones, loading } = useFetch('http://localhost:1234/opiniones')
  return (

    <section className='opiniones'>
      <h2 className='opiniones__title'>Opiniones</h2>
      <div className='opiniones__box'>
        {loading && <div>... Cargando</div>}
        {opiniones?.map(({ id, img, person, occupation, text, link }) =>
          <Opinion
            key={id}
            img={img}
            person={person}
            occupation={occupation}
            text={text}
            link={link}
          />
        )}
      </div>
    </section>
  )
}
