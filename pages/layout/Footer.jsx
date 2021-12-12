import Link from 'next/link'
import myLogo from '../../public/devlogo.png'
import Logo from '../../public/logop.png'

const Footer = () => {
  
  return(
    <div className="footer border-t-2 flex flex-col items-center justify-center py-8 w-screen ">
     <Link href="/">
          <figure>
            <img src={Logo.src} height="100" width="100" className="logo relative z-40 " alt="big shotz logo" />
          </figure>
      </Link>
      <p className="flex justify-center items-center mt-10">Designed & Built By <a href="" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ml-1 "> <span>Dev.Chex</span><img src={myLogo.src} className="h-6 w-4 ml-2 rotate-15" alt="devchex" /></a></p>
    </div>
    )
}

export default Footer 