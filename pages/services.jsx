import bgImg from '../public/bg1.jpg'
import Heading from '../components/Heading'

const services = () => {
  return(
    <main className="services">
      <Heading heading="My Services" subheading ="You can reach out to me for any of the following services, and much much more..." bgImg={bgImg}/>
    </main>
    )
}

export default services 