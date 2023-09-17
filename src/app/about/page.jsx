import React from 'react'

export default function AboutPage() {
  return (
    <div className="py-10 text-white">
      <header>
        <h1 className="text-4xl font-bold mb-8 text-center">
          Acerca de la API de Dragon Ball
        </h1>
      </header>
      <article className="py-6">
        <h2 className="text-yellow-400 text-2xl font-bold mb-2">
          ¿Qué es Dragon Ball API?
        </h2>
        <p className="text-lg">
          Dragon Ball API es una plataforma que te sumerge en el vasto y épico
          mundo de Dragon Ball, la serie de anime y manga creada por Akira
          Toriyama.
        </p>
        <p className="text-lg">
          La API está diseñada para brindarte acceso a una gran cantidad de
          información relacionada con la serie, con un enfoque particular en
          tres aspectos clave: los personajes, las transformaciones y los
          planetas.
        </p>
      </article>

      <article className="py-6">
        <h2 className="text-yellow-400 text-2xl font-bold mb-2">
          Personajes de Dragon Ball
        </h2>
        <p className="text-lg">
          En Dragon Ball API, puedes explorar una amplia variedad de personajes
          que han cautivado a los fanáticos durante décadas. Desde el legendario
          Goku, el Saiyajin que se convirtió en el defensor de la Tierra, hasta
          villanos icónicos como Freezer y Cell, nuestra API te proporciona
          detalles exhaustivos sobre sus biografías, habilidades y evoluciones a
          lo largo de la serie.
        </p>
      </article>

      <article className="py-6">
        <h2 className="text-yellow-400 text-2xl font-bold my-4">
          Transformaciones Impresionantes
        </h2>
        <p className="text-lg">
          Una de las características más emblemáticas de Dragon Ball son las
          transformaciones de los personajes, que les otorgan poderes
          asombrosos. Desde la clásica transformación en Super Saiyajin hasta
          las formas más avanzadas como Ultra Instinto, nuestra API te ofrece
          una visión detallada de estas metamorfosis épicas y cómo influyen en
          la trama y la lucha entre el bien y el mal en la serie.
        </p>
      </article>

      <article className="py-6">
        <h2 className="text-yellow-400 text-2xl font-bold my-4">
          Planetas de Origen
        </h2>
        <p className="text-lg">
          Los planetas en Dragon Ball son tan diversos como los personajes que
          los habitan. Con nuestra API, puedes conocer los mundos natales de tus
          personajes favoritos, como el planeta Vegeta, hogar de los Saiyajin, o
          Namek, el planeta de origen de Piccolo. Explora la historia y las
          características únicas de cada planeta que desees conocer.
        </p>
      </article>

      <article className="py-6">
        <h2 className="text-yellow-400 text-2xl font-bold my-4">
          Stack Tecnológico
        </h2>
        <p className="text-lg">
          La API de Dragon Ball ha sido construida utilizando un sólido stack
          tecnológico que combina las mejores herramientas para brindar un
          servicio de alta calidad.
        </p>
        <p className="text-lg">
          En el lado del backend, hemos optado por Django Rest Framework, una
          poderosa y flexible herramienta que nos permite desarrollar de manera
          eficiente una API pública.
        </p>
        <p>Algunos aspectos destacados de nuestra API incluyen:</p>
        <ul className="list-disc list-inside pl-4 mt-2 text-lg">
          <li>
            <strong className="mr-2 tracking-widest text-yellow-300">
              Django Rest Framework:
            </strong>
            Hemos utilizado Django Rest Framework para la creación del backend
            de la API. Este framework de Django nos permite construir
            rápidamente endpoints RESTful y gestionar de manera efectiva las
            solicitudes y respuestas.
          </li>
          <li>
            <strong className="mr-2 tracking-widest text-yellow-300">
              Límite de Peticiones:
            </strong>
            Para garantizar un uso equitativo de la API y mantener su
            disponibilidad para todos, hemos establecido un límite de 1000
            peticiones por usuario por día.
          </li>
          <li>
            <strong className="mr-2 tracking-widest text-yellow-300">
              Documentación con drf-spectacular:
            </strong>
            Utilizamos drf-spectacular para documentar nuestra API de manera
            precisa y completa. Esto facilita a los desarrolladores comprender y
            utilizar los endpoints disponibles.
          </li>
        </ul>
        <p className="mt-4 text-lg">
          En el frontend, estamos aprovechando las capacidades de Next.js 13
          para crear una experiencia de usuario moderna e interactiva. Esto nos
          permite ofrecer a los usuarios una forma sencilla de interactuar con
          los datos de Dragon Ball y explorar el emocionante universo de la
          serie.
        </p>
      </article>

      <footer>
        <p className="text-lg mt-6">
          ¡Explora la Dragon Ball API y sumérgete en el universo de Dragon Ball
          como nunca antes! Ya seas un fanático apasionado o un desarrollador
          que busca datos precisos y completos, la API está aquí para satisfacer
          tu curiosidad y necesidades.
        </p>
      </footer>
    </div>
  )
}
