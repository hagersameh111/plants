import Navbar from "../components/Navbar/Navbar";
import Aboutus from "../components/About/Aboutus"
import Footer from "../components/Footer/Footer";


const About= () => {
  
  return (
    <> 
    <div>
    <Navbar/>
    <div className="h-[750px ] mt-10">

       <Aboutus/>
           
     
      
    
     
    </div>
 <Footer/>
    </div>
    </>
    
  );

}

export default About