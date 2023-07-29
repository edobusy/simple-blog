import Link from 'next/link'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-2xl font-bold text-white grid place-content-center mb-1 md:mb-1'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Edoardo Busano
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.instagram.com/edobusii/?hl=en'
            target='_blank'
          >
            <FaInstagram />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.linkedin.com/in/edoardobusano/'
            target='_blank'
          >
            <FaLinkedin />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://github.com/edobusy'
            target='_blank'
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  )
}
