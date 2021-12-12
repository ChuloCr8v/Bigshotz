import Form from '../components/Form'
import Heading from '../components/Heading'
import Map from '../components/Map'
import SocialIcons from '../components/SocialIcons'
import Footer from './layout/Footer'


const contact = () => {
  
  const mapStyles = { width: '100%', height: '100%' };
  
  return(
    <div className="min-h-screen flex flex-col justify-center items-center " >
      <Heading heading={'Contact Me'} subheading={'Just so you need that perfect photoshoot, remember we are just a contact away. Fill in the form and we will surely get back to you in no time 📸'} bgImg={'/call.jpg'}/>
      <div className="my-48">
        <div className="flex flex-col justify-center items-center space-y-4">
          <Form />
          <SocialIcons />
        </div>
        <Map />
      </div>
      <Footer />
    </div>
    )
}

export default contact