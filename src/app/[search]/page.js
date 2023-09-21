'use client'

import { getCharacterName } from '@/api/characters/getCharacterID'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import Loading from '../loading'
import Characters from '../components/characters/Characters'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const search = searchParams.get('personaje')
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState(null)

  const getData = async () => {
    setLoading(true)

    const personaje = await getCharacterName(search)
    console.log('personaje', personaje)
    setData(personaje)
    setLoading(false)
  }

  useEffect(() => {
    console.log('Soy el useefect')
    getData()
  }, [search])

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>{loading ? <Loading /> : <Characters data={data} />}</>
}
