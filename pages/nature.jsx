import Gallery from '../components/Gallery'
import NatureImages from '../components/NatureImages'
import axios from 'axios'
import {useState, useEffect} from 'react'


const nature = () => {
  const [natureImages, setNatureImages] = useState([])
  const natureUrl = "https://api.unsplash.com/search/photos?page=1&query=nature&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74"
  
  const fetchData = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=nature&client_id=cRX7ACwXKirh23FBZXsnYvQ3Fd9Xggqlj6N899xxH74`)
    const data = await res.data
    console.log(data)
    setNatureImages(data)
  }
  
  useEffect(() => (
    fetchData()
    ))
  
  
  return(
    <div className="">
      <Gallery images={natureImages} />
    </div>
    )
}

export default nature 