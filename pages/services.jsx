import bgImg from '../public/bg1.jpg'
import Heading from '../components/Heading'
import Services from '../components/Services'
import {motion} from 'framer-motion'
import {useState} from 'react'
import Footer from './layout/Footer'

const services = () => {
  
  return(
    <main className="services flex flex-col justify-center items-center">
      <Heading heading="My Services" subheading ="You can reach out to me for any of the following services, and much much more..." bgImg={'/servicebg.jpg'}/>
      <div className="container mt-36 md:flex flex-wrap justify-center items-center pb-28">
        {Services.map(service => (
          <div className="group card md:w-80 relative m-10 md:m-2 px-4 py-8 text-center bg-gray-800 bg-opacity-50 rounded-lg h-80 flex flex-col justify-center items-center overflow-hidden hover:shadow-2xl" style={{backgroundImage: `url(${service.img})`, backgroundSize: 'cover ', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} >
            <div className="h-0 group-hover:h-96 w-96 absolute z-0 left-0 top-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 transition-all duration-300"></div>
            <h2 className="service-title group-hover:translate-y-96 mt-28 text-center text-xl text-gray-800 font-black bg-gray-200 bg-opacity-50 p-4 transition-all duration-300 relative z-20">{service.title}</h2>
             <p className="service-detail text-gray-200 transition-all duration-300 group-hover:-translate-y-20 transform translate-y-96 relative z-20 font-black ">
                {service.details}
              </p>
            
          </div>
        ))} 
      </div>
      <Footer />
    </main>
    )
}

export default services   