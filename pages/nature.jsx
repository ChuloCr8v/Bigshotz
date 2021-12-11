import Gallery from '../components/Gallery'
import NatureImages from '../components/NatureImages'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import Footer from './layout/Footer'



const nature = () => {
  const [natureImages, setNatureImages] = useState([])
  const [loading, setLoading] = useState(true)

  const key = process.env.REACT_APP_API_KEY
  
  const fetchData = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=nature&per_page=50&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`);
    const data = await res.data.results;
    setNatureImages(data);
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
   }, [])
  
  if(loading) {
    return <Loading />
  }
  
  
  return(
    <div className="container">
      <Heading 
        heading={'Nature Photography'} 
        subheading={'Enjoy a brief but brilliant view of nature in all glamor and shine. Please note that images are pulled from unsplash.com for entertainment purposes.'} 
        bgImg ={'/naturebg.jpg'} 
        />
      <Gallery images={natureImages} />
      <Footer />
    </div>
    )
}

export default nature 