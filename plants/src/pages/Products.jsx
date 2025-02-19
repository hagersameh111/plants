
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Products/Product';
import Footer from '../components/Footer/Footer';
import hero from '../assets/hero.png';
import Search from '../components/Products/Search';
const Products = () => {
  
    return (
      <> 
      <Navbar/>
      <div >
          <div className='relative h-[700px] '>
                
                 <img  src={hero} className='absolute right-0 top-0 h-[700px] w-full  z-[-1] opacity-100'></img>
                 <Search/>
                 </div>
             
       
        <div>
       
        <Product/>
        
        </div>
      
       
      </div>
   <Footer/>
      
      </>
      
    );
  
}

export default Products;