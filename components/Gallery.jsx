import {motion} from 'framer-motion'
import Image from 'next/image'
import {useState} from 'react'
const Gallery = ({images}) => {
  
  const [fullImg, setFullImage] = useState('')
  
  const showFullImage = (regular) => { 
    setFullImage(regular) 
  }
  
  return(
    <div className="gallery flex min-h-screen">
      <div className="px-6  pt-40 flex justify-between items-center flex-wrap">
        {images.map((image, index) => (
            <img key={index} src={image.urls.regular} object-fit className="mt-2" alt="Paul Ray Photography" onClick={() => showFullImage(image.urls.regular)} />
           
        ))}
      </div>
       {fullImg && 
                <div 
                  
                  className="modal fixed z-40 top-0 min-h-screen w-screen flex flex-col justify-center items-center p-8 backdrop-filter backdrop-blur-md ">
                  <motion.img 
                  initial ={{y: -200}} 
                  animate ={{y: 0}} 
                  src={fullImg} alt="nature" className ="border-2 border-gray-200" />
                  <p onClick={() => setFullImage('')}  className="close mt-28 text-lg text-gray-200 bg-gray-800 bg-opacity-30 rounded-2xl border-2 px-4 hover:scale-110 transition-all duration-300 ">close</p>
                </div>
              } 
    </div>
    )
}

export default Gallery 