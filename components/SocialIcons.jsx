import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center space-x-3 text-gray-200 dark:text-gray-800" >
      <a href="facebook.com" target="_blank" rel="noopener noreferrer" className=" bg-gray-800 dark:bg-gray-200 rounded-full p-2">
        <FaFacebook className="text-3xl " />
      </a>
      <a href="instagram.com" target="_blank" rel="noopener noreferrer" className=" bg-gray-800 dark:bg-gray-200 rounded-full p-2">
        <FaInstagram className="text-3xl " />
      </a>
      <a href="twitter.com" target="_blank" rel="noopener noreferrer" className=" bg-gray-800 dark:bg-gray-200 rounded-full p-2">
        <FaTwitter className="text-3xl " />
      </a>
    </div>
  )
}

export default SocialIcons