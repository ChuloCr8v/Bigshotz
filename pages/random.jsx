import axios from 'axios'
import Gallery from '../components/Gallery'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import {useState, useEffect} from 'react'
import Footer from './layout/Footer'

const random = () => {
  const [searchInput, setSearchInput] = useState('')
  const [randomImages, setRandomImages] = useState([])
  const [loading, setLoading] = useState(true)
  
  
  const search = (e) => {
    e.preventDefault()
    fetchData(searchInput)
  } 
  
  const fetchData = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${!searchInput ? 'random' : searchInput}&per_page=50&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`);
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
  return(
    <div className="couple container ">
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
      <Gallery images={randomImages} />
      <Footer />
    </div>
    )
}

export default random 