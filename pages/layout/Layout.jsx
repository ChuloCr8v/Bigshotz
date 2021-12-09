import Header from './Header'
import Footer from './Footer'

const Layout  = ({children}) => {
  return(
    <div className="relative">
     <Header />
      {children} 
    </div>
    )
}

export default Layout 