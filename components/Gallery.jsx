
import Image from 'next/image'

const Gallery = ({images}) => {
  return(
    <div className="gallery flex min-h-screen flex-wrap justify-center items-center ">
      <div className="container flex flex-wrap justify-center items-center ">
        {images.map((image) => (
          <Image src={image.urls.regular} width="120" object-fit height="100" className="m-0" alt="Paul Ray Photography" />
        ))}
      </div>
    </div>
    )
}

export default Gallery 