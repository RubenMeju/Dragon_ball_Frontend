import { Suspense } from 'react'
import Loading from './loading'
import Characters from './components/characters/Characters'
import { getCharacters } from '@/api/characters/getCharacters'

export default async function Home() {
  const data = await getCharacters()
  return (
    <div className="py-4">
      <Suspense fallback={<Loading />}>
        <Characters data={data} />
      </Suspense>
    </div>
  )
}
