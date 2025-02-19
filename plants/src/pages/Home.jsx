import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import hhh1 from '../assets/hhh1.png'



const Home = () => {

  return (
    <>
    <div >
      <Navbar/>
      <div className='relative h-[700px] '>
      <img  src={hhh1} className='absolute right-0 top-0 h-[700px] w-full  z-[-1] opacity-100'></img>
      <Hero/>
      
      </div>
    
      <Footer/>
    </div>

    
    </>
    
  );
};

export default Home