import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import g1 from "../../assets/g1.webp"
import { Link } from 'react-router-dom';
import Basil from '../../assets/Basil.jpg'
import Rosemary from '../../assets/Rosemary.jpg'
import Tomato from '../../assets/Tomato.jpg'
import Rose from '../../assets/Rose.jpg'
import Peppers from "../../assets/Peppers.jpg"
import Carrots from "../../assets/Carrots.jpg"
import Areca from '../../assets/ArecaPalm.jpg'
import Chinese from '../../assets/Chinese.jpg'
import Monster from '../../assets/MonsteraDeliciosa.jpg'
import Bou from "../../assets/Bougainvillea.jpg" 
import Petunias from "../../assets/Petunias.jpg"
import { GiPlantSeed } from "react-icons/gi";



import  { useState } from "react";

const products = [
  {
    id: 1,
    name: "Basil",
    price: "$15.00",
    image: [Basil],
  },
  {
    id: 2,
    name: "Petunias",
    price: "$15.00",
    image: [Petunias],
  },
  {
    id: 3,
    name: "Rosemary",
    price: "$15.00",
    image: [Rosemary],
  },
  {
    id: 4,
    name: "Tomato",
    price: "$15.00",
    image: [Tomato],
  },
  {
    id: 5,
    name: "Red Rose pot",
    price: "$15.00",
    image: [Rose],
  },
  {
    id: 6,
    name: "Bou",
    price: "$15.00",
    image: [Bou],
  },
  {
    id: 7,
    name: "Monster",
    price: "$15.00",
    image: [Monster],
  },
  {
    id: 8,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 9,
    name: "Areca",
    price: "$15.00",
    image: [Areca],
  },
  {
    id: 10,
    name: " Red Peppers",
    price: "$15.00",
    image: [Peppers],
  },
  {
    id: 11,
    name: "Chinese",
    price: "$15.00",
    image: [Chinese],
  },
  {
    id: 12,
    name: "Carrots",
    price: "$15.00",
    image: [Carrots],
  },
];

const OutD = () => {
  const [searchTerm,] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 ">
<h2 className='font-bold flex'> <span>outdoor Plants</span> <span className='text-primary text-2xl'><GiPlantSeed /></span></h2>
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




export default OutD