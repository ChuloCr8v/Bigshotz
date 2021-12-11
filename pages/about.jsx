import Heading from '../components/Heading'
import Image from 'next/image'
import IntroOne from '../public/hero1.jpg'
import IntroTwo from '../public/pr09.jpg'
import Camera from '../public/camera.png'
import Ps from '../public/ps.png'
import Edit from '../public/edit.png'
import {FaCamera, FaCameraRetro} from 'react-icons/fa'
import Footer from './layout/Footer'

const About = () => {
  return(
    <main className="about w-screen relative z-20 ">
      
        <Heading bgImg={'/bg1.jpg'} heading="About Me" subheading="Here are a few things you many want to know about me, besides the fact that I make awesome photos and turn basic people into models" />
        
      <div className="container mx-auto flex flex-col justify-center items-center">
        
        <div className="content mt-20">
        
          <div className="brief-intro md:pt-28 flex flex-col justify-center items-center ">
          
            <div className="img-container relative">
              <div className="absolute -top-10 -left-4 h-96 w-80 z-40 border-4 border-yellow-600 img-bg"></div>
              
              <div className="absolute top-10 left-10 h-10 w-10 rounded-full z-40 border-4 border-white-600 img-bg"></div>
              
              <div className="absolute -bottom-4 -right-4 h-80 w-80 z-0 border-4 border-green-600 img-bg"></div>
              
              <Image src={IntroTwo} alt="Paul Ray Photography" height="350" width="350" className="shadow-2xl" />
            </div>
            
            <div className="text md:px-28 mt-20 p-8">
             <h2 className="text-xl font-bold">Paul Ray </h2>
              <p className="intro mt-4 ">Paul Ray stands for everything you desire and deserve in lenses. My shots are epic and my edits are tailored to match your desired outcome while still giving your picture a natural blend, ss well as touch.</p>
            </div>
            
            <div className="img-container relative my-20">
              <div className="absolute bg-gray-300 -top-10 -left-4 h-96 w-80 z-0 border-4 img-bg"></div>
              
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full z-40 border-4 border-yellow-600 img-bg"></div>
              
              <div className="absolute -bottom-4 -right-4 h-20 w-10 z-20 border-4 border-green-600 img-bg"></div>
              
              <Image src={IntroOne} alt="Paul Ray Photography" height="350" width="350" className="shadow-2xl" />
            </div>
            
          </div>
          
          <div className="tools w-screen text-gray-200 dark:text-gray-900 px-3 md:px-28 py-24 bg-gray-900 dark:bg-gray-200 flex flex-col justify-center items-center mt-36 ">
          
            <h2 className="text-xl font-bold flex items-center space-x-2">My T<span className="flex items-center space-x-1 text-3xl mx-1"><FaCameraRetro className="-rotate-45" /><FaCameraRetro className="rotate-45"/></span>LS</h2>
            
            <div className="list mt-24 flex lg:flex-row flex-wrap flex-col justify-center items-center lg:space-x-3 ">
            
              <figure className="item flex flex-col justify-center items-center text-center lg:w-1/3 md:px-16">
              
                <div className="mx-auto bg-gray-100 rounded-full p-4 border-2"> 
                  <FaCameraRetro className="text-4xl text-gray-800" />
                </div>
                
                <figcaption>
                  <p className="text-yellow-300 dark:text-yellow-800 text-center text-2xl text-yellow-200 py-3">Photoshoots</p>
                  <p className="">Capture your special moments in details for future memories. Make those moments evergreen with the right photos.</p>
                </figcaption>
                
              </figure>
              
              <figure className="item flex flex-col justify-center items-center text-center lg:w-1/3 px-2 mt-24 lg:mt-0 md:px-16">
              
                <div className="mx-auto bg-gray-100 rounded-full p-4 border-2"> 
                  <img src={Ps.src} height="30" width="30" className="" />
                </div>
                
                <figcaption>
                  <p className="text-yellow-300 dark:text-yellow-800 text-center text-2xl text-yellow-200 py-3">Photoshop Manipulation</p>
                  <p className="">Turn your photos into works of art with the perfect photoshop manipulation. The opportunities are limitless.</p>
                </figcaption>
                
              </figure>
              
              <figure className="item flex flex-col justify-center items-center text-center lg:w-1/3 px-2 mt-24 lg:mt-0 md:px-16">
              
                <div className="mx-auto bg-gray-100 rounded-full p-4 border-2"> 
                   <img src={Edit.src} height="30" width="30" className="" />
                </div>
                
                <figcaption>
                  <p className="text-yellow-300 dark:text-yellow-800 text-center text-2xl text-yellow-200 py-3">Photo Editing</p>
                  <p className="">Retouch your photos to see the magic that you could create with your special moments and special people.</p>
                </figcaption>
                
              </figure>
              
            </div>
         </div>
          
        </div>
      </div>
      <Footer />
    </main>
    )
}

export default About 