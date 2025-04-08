import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import soilblind from "../../assets/s.webp"
import Active from "../../assets/Active.webp"
import Blackgold from "../../assets/Blackgold.webp"
import eco from "../../assets/eco.jpg"
import Mo from "../../assets/Mo.webp"
import NPK from "../../assets/NPK.jpg"
import Humix from "../../assets/Humix.webp"
import Nop from "../../assets/Nop.webp"
import { Link } from 'react-router-dom';
import { GiFertilizerBag } from "react-icons/gi";




import  { useState } from "react";

const products = [
  {
    id: 1,
    name: "Soil Blind",
    price: "$15.00",
    image: [soilblind],
  },
  {
    id: 2,
    name: "Active",
    price: "$15.00",
    image: [Active],
  },
  {
    id: 3,
    name: "Black gold",
    price: "$15.00",
    image: [Blackgold],
  },
  {
    id: 4,
    name: "eco",
    price: "$15.00",
    image: [eco],
  },
  {
    id: 5,
    name: "Mo",
    price: "$15.00",
    image: [Mo],
  },
  {
    id: 6,
    name: "NPK",
    price: "$15.00",
    image: [NPK],
  },
  {
    id: 7,
    name: "Humix",
    price: "$15.00",
    image: [Humix],
  },
  {
    id: 8,
    name: "Nop",
    price: "$15.00",
    image: [Nop],
  },
 
];

const Fert = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      

      
      <h2 className='font-bold flex'> <span>Fertilizers</span> <span className='text-primary text-2xl'><GiFertilizerBag /></span></h2>

     
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{product.name}</h3>
            <p className="text-green-600 font-bold text-lg">{product.price}</p>
            <div className="flex gap-2 mt-3">
              <button className="w-full bg-green-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-800">
              <Link to="/Cart" >
                    Add to cart <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
              </button>
              <button className="bg-gray-200 text-green-600 p-2 rounded-md hover:bg-gray-300">
              <Link to="/Favourites" >
                   <FontAwesomeIcon icon={faHeart} />
                  </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fert