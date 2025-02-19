import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Hero1 from '../components/Hero/Hero1';




const Home = () => {

  return (
    <>
    <div >
      <div className='relative'>
<Navbar/>
      </div>
      
      <div className=' h-[700px] '>
     
      <Hero/>
      
      </div>
      <div className='h-[1200px]'>
      <Hero1/>
    </div>
      <Footer/>
    </div>

    
    </>
    
  );
};

export default Home