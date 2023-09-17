import { Suspense } from 'react'
import Loading from './loading'
import Characters from './components/characters/Characters'
import { getCharacters } from '@/api/characters/getCharacters'

export default async function Home() {
  const data = await getCharacters()
  return (
    <div className="py-4">
      <h1 className="py-2 text-center text-5xl text-white">Dragon ball API</h1>
      <p className="py-4 text-center text-2xl text-white">Personajes</p>
      <Suspense fallback={<Loading />}>
        <Characters data={data} />
      </Suspense>
    </div>
  )
}
