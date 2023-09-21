import SearchForm from './components/SearchForm'
import NavBar from './components/characters/navbar/NavBar'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'DragonBall API',
  description: 'API de Dragon Ball para desarrolladores',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.className} bg-gradient-to-r from-[#094293] via-[#6048ff] to-[#094293] `}
      >
        <NavBar />
        <div className="bg-black/50">
          <div className="w-[90%] m-auto max-w-screen-lg pt-20">
            <h1 className="py-2 text-center text-4xl text-white">
              Dragon ball API
            </h1>

            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
