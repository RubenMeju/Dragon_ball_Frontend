'use client'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Page() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const codeString = `{
    "characters": "${URL_BASE}/characters",
    "planets": "${URL_BASE}/planets",
    "transformations": "${URL_BASE}/transformations"
  }`

  const endpoint = `{
    {
      "count": 123,
      "next": "http://api.example.org/accounts/?offset=400&limit=100",
      "previous": "http://api.example.org/accounts/?offset=200&limit=100",
      "results": [
        {
          "id": 0,
          "planet_origin": "string",
          "planet_current": "string",
          "race": "string",
          "transformations": "string",
          "name": "string",
          "description": "string",
          "thumbnail": "string",
          "image": "string",
          "gender": "FE"
        }
      ]
    }
  }`
  return (
    <div className="w-full h-[cal(100vh -20rem)] ">
      <div className="mx-auto p-8 text-slate-100">
        <h1 className="text-4xl font-bold py-6">Documentación</h1>

        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-2">Introducción</h2>
          <p className="text-lg">
            La API de Dragon Ball proporciona acceso a información relacionada
            con el mundo del famoso manga y anime Dragon Ball. Esta API ofrece
            datos sobre personajes, ubicaciones, objetos, técnicas y mucho más,
            permitiendo a los desarrolladores integrar fácilmente la riqueza del
            universo de Dragon Ball en sus aplicaciones y proyectos.
          </p>
        </section>

        <SyntaxHighlighter language="json" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-2">Información general</h2>
          <ul className="list-disc list-inside text-lg">
            <li>{`URL base: ${URL_BASE}`}</li>
            <li>Versión de la API: v1</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">
            Ejemplo endpoint characters
          </h2>
          <SyntaxHighlighter language="json" style={darcula}>
            {endpoint}
          </SyntaxHighlighter>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-2">
            Documentación de Swagger
          </h2>
          <p className="text-lg">
            La documentación de Swagger proporciona una descripción detallada de
            todos los endpoints de la API, los parámetros que aceptan y las
            respuestas que devuelven.
          </p>
          <a
            href={`${URL_BASE}/swagger-ui/`}
            className="text-blue-400 text-xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación de Swagger
          </a>
        </section>

        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-2">
            Documentación de ReDoc
          </h2>
          <p className="text-lg">
            ReDoc ofrece una forma interactiva de explorar la API, con ejemplos
            claros y navegación sencilla.
          </p>
          <a
            href={`${URL_BASE}/api/schema/redoc//`}
            className="text-blue-400 text-xl hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación de ReDoc
          </a>
        </section>
      </div>
    </div>
  )
}
