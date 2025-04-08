import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import InD from "../components/Products/InD"
import Nav from "../components/Products/Nav"

const Indoor = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <Nav/>
        <InD/>
        <div>
            <Footer/>
        </div>
    </div>
  )
}
export default Indoor;