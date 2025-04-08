import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import OutD from "../components/Products/OutD"
import Nav from "../components/Products/Nav"

const Outdoor = () => {
  return (
    <div>
        <div>
            <Navbar/>
            
        </div>
        <Nav/>
        <OutD/>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Outdoor