import {useTheme} from 'next-themes'
import {FaSun, FaMoon, FaBars} from 'react-icons/fa'
import Logo from '../../public/logo.jpg'
import Menu from './Menu'
import {useState} from 'react'
import Link from 'next/link'
const Header = () => {
  
  const {theme, setTheme, systemTheme} = useTheme()
  const [showMenu, setShowMenu] = useState(false)
  
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    
    if (currentTheme === 'dark'){
      return (
          <FaSun className="bg-gray-200 text-gray-900 rounded-full p-2 text-3xl relative z-40" onClick={() => setTheme('light')}/>
        )
    } else {
      return (
          <FaMoon className="bg-gray-900 text-gray-200 rounded-full p-2 text-3xl relative z-40" onClick={() => setTheme('dark')}/>
        )
    }
    }
  
  return(
    <div className="header p-5 fixed w-screen z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <figure>
            <img src={Logo.src} height="50" width="50" className="logo rounded-full relative z-40 " alt="Paul Ray photography logo" />
          </figure>
        </Link>
        {renderThemeChanger()} 
        <div className="nav relative z-20 ">
          <FaBars className="text-3xl duration-100 relative z-50" onClick={() => setShowMenu(!showMenu)} style={{border: `${showMenu ? '1px silver solid' : ''}`, padding:`${showMenu ? '.15rem' : ''}`}} />
          {showMenu && <Menu />} 
        </div>
      </div>
    </div>
    )
}

export default Header 