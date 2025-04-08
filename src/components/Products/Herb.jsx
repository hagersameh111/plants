import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from "react";
import Basil from "../../assets/Basil.jpg"
import Mint from "../../assets/Mint.jpg"
import Rosemary from "../../assets/Rosemary.jpg"
import Sage from "../../assets/Sage.jpg"
import Thyme from "../../assets/Thyme.jpg"
import Dill from "../../assets/Dill.jpg"
import Parsley from "../../assets/Parsley.jpg"
import Oregano from "../../assets/Oregano.jpg"
import Coriander from "../../assets/Coriander.jpg"
import Chamomile from "../../assets/Chamomile.jpg"
import { GiHerbsBundle } from "react-icons/gi";
import Argula from "../../assets/Arugula.jpg"

const products = [
  {
    id: 12,
    name: "Argula",
    price: "$15.00",
    image: [Argula],
  },
  {
    id: 1,
    name: "Basil",
    price: "$15.00",
    image: [Basil],
  },
  {
    id: 2,
    name: "Mint",
    price: "$15.00",
    image: [Mint],
  },
  {
    id: 3,
    name: "Rosemary",
    price: "$15.00",
    image: [Rosemary],
  },
  {
    id: 4,
    name: "Chamomil",
    price: "$15.00",
    image: [Chamomile],
  },
  {
    id: 5,
    name: "Coriander",
    price: "$15.00",
    image: [Coriander],
  },
  {
    id: 6,
    name: "Dill",
    price: "$15.00",
    image: [Dill],
  },
  {
    id: 7,
    name: "Oregano",
    price: "$15.00",
    image: [Oregano],
  },
  {
    id: 8,
    name: "Parsley",
    price: "$15.00",
    image: [Parsley],
  },
  {
    id: 9,
    name: "Sage",
    price: "$15.00",
    image: [Sage],
  },
  {
    id: 10,
    name: "Thyme",
    price: "$15.00",
    image: [Thyme],
  },
  
];

const Herb = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
    
      
 <h2 className='font-bold flex'> <span>Herbs</span> <span className='text-primary text-3xl'><GiHerbsBundle /></span></h2>
     

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

export default Herb