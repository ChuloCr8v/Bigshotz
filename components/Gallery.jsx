import {motion} from 'framer-motion'
import Image from 'next/image'
import {useState} from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'


const Gallery = ({images}) => {
  
  const [fullImg, setFullImage] = useState('')
  
  const showFullImage = (regular) => { 
    setFullImage(regular) 
  }
  
  return(
    <div className="gallery container flex flex-col justify-center items-center min-h-screen p-4">
      <ImageList className="mt-28 grid place-items-center" variant="masonry" gap={8} cols={3}>
        {images.map((image, index) => (
          <ImageListItem key={index} >
            <img src={image.urls.regular} alt="Big Shotz Photography" onClick={() => showFullImage(image.urls.regular)} className="mt-0"/>
          </ImageListItem>
           
        ))}
      </ImageList>
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