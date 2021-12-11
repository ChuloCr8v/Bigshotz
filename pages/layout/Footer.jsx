
import myLogo from '../../public/devlogo.png'
const Footer = () => {
  
  return(
    <div className="footer border-t-2 flex flex-col items-center justify-center py-8 w-screen ">
      <h2 className="footer">Big Lens</h2>
      <p className="flex justify-center items-center">Designed & Built By <a href="" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center ml-1 "> <span>Dev.Chex</span><img src={myLogo.src} className="h-6 w-4 ml-2 rotate-15" alt="devchex" /></a></p>
    </div>
    )
}

export default Footer 