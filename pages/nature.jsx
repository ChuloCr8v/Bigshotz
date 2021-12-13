import Gallery from '../components/Gallery'
import NatureImages from '../components/NatureImages'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import Footer from './layout/Footer'
import Pagination from '@mui/material/Pagination'


const nature = () => {
  const [natureImages, setNatureImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('')

  const key = process.env.REACT_APP_API_KEY
  
  const fetchData = async (page) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=nature&per_page=20&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`);
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
  
 const handleChange = (event, value) => {
   setPage(value)
   fetchData(value)
 }
  
  
  return(
    <div className="container w-screen grid place-items-center">
      <Heading 
        heading={'Nature Photography'} 
        subheading={'Enjoy a brief but brilliant view of nature in all glamor and shine. Please note that images are pulled from unsplash.com for entertainment purposes.'} 
        bgImg ={'/naturebg.jpg'} 
        />
      <div className="flex flex-col justify-center items-center my-28 mx-auto">
        <Pagination count={50} page={page} onChange={handleChange} />
          <Gallery images={natureImages} />
      </div>
      <div className="flex flex-col justify-center items-center my-28">
        <Pagination count={50} page={page} onChange={handleChange} />
      </div>
      <Footer />
    </div>
    )
}

export default nature 