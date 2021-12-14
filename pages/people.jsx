import axios from 'axios'
import Gallery from '../components/Gallery'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import {useState, useEffect} from 'react'
import Footer from './layout/Footer'
import Pagination from '@mui/material/Pagination'

const people = () => {
  
  const [peopleImages, setPeopleImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('')
  
  const fetchData = async (value) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=people&per_page=50&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`);
    const data = await res.data.results;
    setPeopleImages(data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  if (loading) {
    return <Loading />
  }
  
  
 const handleChange = (event, value) => {
   setPage(value)
   fetchData(value)
 }
  
  
  return(
    <div className="people ">
      <Heading heading={'People Photography'} subheading={'Enjoy a brief but brilliant view of people from all walks of life, doing their thing or just being themselves. Please note that images are pulled from unsplash.com for entertainment purposes.'} bgImg={'/peopleBg.jpg'} />
    <div className="flex flex-col justify-center items-center my-28">
        <Pagination variant="outlined" color="secondary" count={50} page={page} onChange={handleChange} />
          <Gallery images={peopleImages} />
      </div>
      <div className="flex flex-col justify-center items-center my-28">
        <Pagination variant="outlined" color="secondary" count={50} page={page} onChange={handleChange} />
      </div>
      <Footer />
    </div>
    )
}

export default people 