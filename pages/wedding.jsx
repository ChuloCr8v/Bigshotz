import axios from 'axios'
import Gallery from '../components/Gallery'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import {useState, useEffect} from 'react'
import Footer from './layout/Footer'

const couple = () => {
  
  const [coupleImages, setCoupleImages] = useState([])
  const [loading, setLoading] = useState(true)
  
  const fetchData = async () => {
    const res = await axios.get('https://api.unsplash.com/search/photos?page=1&query=couple&per_page=50&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74');
    const data = await res.data.results;
    setCoupleImages(data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  if (loading) {
    return <Loading />
  }
  return(
    <div className="couple container ">
      <Heading heading={'Wedding Photography'} subheading={'Enjoy a brief but brilliant view of people falling in love and showing it. Please note that images are pulled from unsplash.com for entertainment purposes.'} bgImg={'/coupleBg.jpg'} />
      <Gallery images={coupleImages} />
      <Footer />
    </div>
    )
}

export default couple 