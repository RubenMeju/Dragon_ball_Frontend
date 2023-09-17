import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="fixed z-10 w-full bg-gradient-to-r from-[#e06907] via-[#ee2c2c] to-[#e06907]">
      <div className="m-auto flex h-20 w-[90%] max-w-screen-lg items-center justify-between">
        <Link href="/">
          <img
            src="letras.png"
            className="h-10 lg:h-14"
            alt="Bola de 4 estrellas"
          />
        </Link>

        <ul className="flex gap-4 text-3xl text-white">
          <li>
            <Link href="/documentation">Docs</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
