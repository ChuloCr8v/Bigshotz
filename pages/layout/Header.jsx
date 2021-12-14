import { useTheme } from 'next-themes'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import Logo from '../../public/logop.png'
import Menu from './Menu'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {

  const { theme, setTheme, systemTheme } = useTheme()
  const [showMenu, setShowMenu] = useState(false)
  const [headerBg, setHeaderBg] = useState(false);

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <FaSun className="bg-gray-200 text-gray-900 rounded-full p-2 text-3xl relative z-40" onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <FaMoon className="bg-gray-900 text-gray-200 rounded-full p-2 text-3xl relative z-40" onClick={() => setTheme('dark')} />
      )
    }
  }

  const addHeaderBg = () => {
    if (scrollY > 100) {
      setHeaderBg(true)
    } else {
      setHeaderBg(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addHeaderBg)
  })



  return (
    <div className="header duration-300 p-5 fixed w-screen z-50" style={{ background: `${headerBg ? '#000000' : 'transparent'}` }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <figure>
            <img src={Logo.src} height="100" width="100" className="logo relative z-40 " alt="big shotz logo" />
          </figure>
        </Link>
        {renderThemeChanger()}
        <div className="nav relative z-20 ">
          <div className="xl:hidden flex flex-col justify-center items-center">
            <FaBars className="text-3xl text-white duration-100 relative z-50 lg:hidden" onClick={() => setShowMenu(!showMenu)} style={{ border: `${showMenu ? '1px silver solid' : ''}`, padding: `${showMenu ? '.15rem' : ''}` }} />
            {showMenu && <Menu />}
          </div>
          <div className="hidden lg:block">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header