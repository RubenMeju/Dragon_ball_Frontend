'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('handle: ', e.target.search.value)
    setSearchValue(e.target.value)
    router.push(`/search/?personaje=${e.target.search.value}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] m-auto bg-red-500 flex lg:max-w-sm"
    >
      <input
        type="text"
        name="search"
        placeholder="Goku, Vegeta, Bulma ..."
        className="w-full px-4 py-2"
      />
      <button className="bg-green-400 px-4 py-2">Buscar</button>
    </form>
  )
}
