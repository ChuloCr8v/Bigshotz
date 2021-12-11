
import {FaSpinner} from 'react-icons/fa'

const Loading = () => {
  return(
      <div className="min-h-screen bg-gray-200 w-screen flex flex-col justify-center items-center ">
        <FaSpinner className="text-center text-gray-900 text-5xl font-black animate-spin" />
      </div>
    )
}

export default Loading 