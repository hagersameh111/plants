
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Products/Product';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Products/Nav';

const Products = () => {
  
    return (
      <> 
      <Navbar/>
      <div >
         
             
       <Nav/>
        <div className=''>
          
       
        <Product/>
        
        </div>
      
       
      </div>
   <Footer/>
      
      </>
      
    );
  
}

export default Products;