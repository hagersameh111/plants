import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import hhh1 from '../../assets/hhh1.png';
import { Link } from 'react-router-dom';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const productData = {
  Type: [
    { id: 1, name: "plant", img: hhh1 },
    { id: 2, name: "plant", img: hhh1 },
    { id: 3, name: "plant", img: hhh1 },
    { id: 3, name: "plant", img: hhh1 },
  ],
  Type1: [
    { id: 4, name: "plant", img: hhh1},
    { id: 5, name: "plant", img: hhh1  },
    { id: 6, name: "plant", img: hhh1 },
    { id: 3, name: "plant", img: hhh1 },
  ],
  Type2: [
    { id: 7, name: "plant", img: hhh1 },
    { id: 8, name: "plant", img: hhh1},
    { id: 9, name: "plant", img: hhh1 },
    { id: 3, name: "plant", img: hhh1 },
  ],
};

const Product = () => {
  const ProductSection = ({ title, products }) => (
    
    <section className="products ">
     
      <h2 className="pr text-center text-xl font-bold text-quaternary mb-6 ">{title}</h2>
      <div className="box-container flex flex-wrap gap-3 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className=' bg-quaternary   rounded-tl-full rounded-br-full flex flex-col  '
          >
            <div className="image relative text-center  p-1 px-4 transition-transform duration-300 hover:scale-105">
              <img
                src={product.img}
                alt={product.name}
                className="h-340 w-64 object-cover rounded-tl-full rounded-br-full"
              />
              <div className="icons flex=   justify-left  transition-all duration-300 hover:bottom-2">
              <button className="hover:text-tertiary transition duration-300"
              >
                 <Link to="/Favourites" >
                   <FontAwesomeIcon icon={faHeart} />
                  </Link>
              
                </button>
                <button
                className="hover:text-tertiary transition duration-300"
              >
                 <Link to="/Cart" >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
           
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className='products  bg-quinary'>
       <div className=' margin-top 10px '>
      <h1 className="text-2xl text-bold text-left text-quaternary  p-8 py-20 "> Our Plants <FontAwesomeIcon icon={faPagelines} className="text-green-500 text-2xl" /> </h1>
      </div>
      <div className=" text-left   p-8 py-6 ">
      <ProductSection title="Plant type" products={productData.Type} />
      </div>
      <div className=" text-left   p-8 py-6 ">
      <ProductSection title="Plant type" products={productData.Type1} />
      </div>
      <div className=" text-left   p-8 py-6 ">
      <ProductSection title="Plant type" products={productData.Type2} />
      </div>
    </div>
  );
};

export default Product;