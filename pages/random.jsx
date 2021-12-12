import axios from 'axios'
import Gallery from '../components/Gallery'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import {useState, useEffect} from 'react'
import Footer from './layout/Footer'
import Pagination from '@mui/material/Pagination'

const random = () => {
  const [searchInput, setSearchInput] = useState('')
  const [randomImages, setRandomImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState('')
  
  const search = (e) => {
    e.preventDefault()
    fetchData(searchInput)
  } 
  
  const fetchData = async (value) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${!searchInput ? 'random' : searchInput}&per_page=50&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`);
    const data = await res.data.results;
    setRandomImages(data)
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
    <div className="random flex flex-col justify-center items-center">
      <Heading heading={'Random Pictures'} subheading={'Surf through random and amazing picture collections. Please note that images are pulled from unsplash.com for entertainment purposes.'} bgImg={'/peopleBg.jpg'} />
      <div className="searchbar m-10 ">
       <form onsubmit="search(event)" className="flex justify-center items-center">
         <input 
         className="p-2 border-b-2 bg-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 "
          type="text" 
          placeholder="Try searching for boat or lamborghini" 
          onChange={(e) => setSearchInput(e.target.value)} 
         />
         <input type="submit" onClick={search} value="search" className="submit bg-gray-900 text-gray-200 py-2 px-4 m-2" />
       </form>
      </div>
      <div className="flex flex-col justify-center items-center my-28">
        <Pagination count={50} page={page} onChange={handleChange} />
          <Gallery images={randomImages} />
      </div>
      <div className="flex flex-col justify-center items-center my-28">
        <Pagination count={50} page={page} onChange={handleChange} />
      </div>
      <Footer />
    </div>
    )
}

export default random 