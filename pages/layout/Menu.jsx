import {useState} from 'react';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Menu = () => {
  
  const [subMenu, setSubMenu] = useState(false);
  
  
  return(
    <motion.nav 
      className="bg-gray-200 dark:bg-gray-900 min-h-screen w-screen navigation fixed left-0 top-0 z-40 flex flex-col justify-center items-center"
      initial = {{x: -20}}
      animate = {{x: 0}}
    >
      <ol className="menu w-full -mt-56 space-y-4 text-center">
        <li className="menu-item text-lg hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 "><a href="/">Big Shotz 📸</a></li>
        <li className="menu-item text-lg hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300"><a href="/about">About Me</a></li>
        <li className=" hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 menu-item text-lg">
          <div className="flex justify-center items-center " onClick ={() => setSubMenu(!subMenu)}>
            Gallery
            {subMenu ? 
            <FaChevronUp className="hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 ml-4" /> :  
            <FaChevronDown className="hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 ml-4" />
            } 
          </div>
          {subMenu && 
            <motion.ol 
              className="menu-item text-lg overflow-hidden space-y-3 bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 w-full mt-4 py-4"
              initial = {{y: -20}} 
              animate = {{y: 0}} 
            >
              <li className="submenu text-lg hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300"><a href="/nature">Nature</a></li>
              <li className = "submenu text-lg hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300"><a href="/wedding">Wedding</a></li>
              <li className="submenu text-lg hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300"><a href="/people">People</a></li>
              <li className="submenu text-lg hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300"><a href="/random">Random</a></li>
            </motion.ol>
          } 
        </li>
        <li className="menu-item text-lg hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300"><a href="/contact">Contact</a></li>
     </ol>
    </motion.nav>
    )
}

export default Menu 