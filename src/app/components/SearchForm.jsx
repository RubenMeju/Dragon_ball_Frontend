'use client'
import { useRouter } from 'next/navigation'

export default function SearchForm() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/?personaje=${e.target.search.value}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mb-8 m-auto flex lg:max-w-sm "
    >
      <input
        type="text"
        name="search"
        placeholder="Goku, Vegeta, Bulma ..."
        className="w-full px-4 py-2  focus:bg-orange-300 focus:outline-0 "
      />
      <button className="bg-[#ee2c2c] px-4 py-2 text-slate-100">Buscar</button>
    </form>
  )
}
