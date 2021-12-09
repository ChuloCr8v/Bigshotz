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
        <li className="menu-item text-2xl hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 ">Paul Ray</li>
        <li className="menu-item text-2xl hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300">About Me</li>
        <li className=" hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 menu-item text-2xl">
          <div className="flex justify-center items-center " onClick ={() => setSubMenu(!subMenu)}>
            Gallery
            {subMenu ? 
            <FaChevronUp className="hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 ml-4" /> :  
            <FaChevronDown className="hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300 ml-4" />
            } 
          </div>
          {subMenu && 
            <motion.ol 
              className="menu-item text-2xl overflow-hidden space-y-3 bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 w-full mt-4 py-4"
              initial = {{y: -20}} 
              animate = {{y: 0}} 
            >
              <li className="submenu text-xl hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300">Nature</li>
              <li className = "submenu text-xl hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300">Couple</li>
              <li className="submenu text-xl hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300">People</li>
              <li className="submenu text-xl hover:scale-105 hover:text-yellow-200 dark:hover:text-yellow-800 duration-300">Random</li>
            </motion.ol>
          } 
        </li>
        <li className="menu-item text-2xl hover:scale-105 dark:hover:text-yellow-200 hover:text-yellow-800 duration-300">Contact</li>
     </ol>
    </motion.nav>
    )
}

export default Menu 