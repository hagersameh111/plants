import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ZZ from '../../assets/ZZ.jpg'
import Snake from '../../assets/Snake.jpg'
import Chinese from '../../assets/Chinese.jpg'
import Peace from '../../assets/Peace Lily (Spathiphyllum).jpg'
import Spider from '../../assets/Spider.jpg'
import Rub from '../../assets/Rubber Plant.jpg'
import Pothos from '../../assets/Pothos.jpg'
import Monster from '../../assets/MonsteraDeliciosa.jpg'
import Lucky from '../../assets/LuckyBamboo.jpg'
import Aloe from '../../assets/Aloe.jpg'
import Areca from '../../assets/ArecaPalm.jpg'
import Jade from '../../assets/Jade.jpg'
import { PiPottedPlantDuotone } from "react-icons/pi";




import  { useState } from "react";

const products = [
  {
    id: 1,
    name: "ZZ Plant",
    price: "$15.00",
    image: [ZZ],
  },
  {
    id: 2,
    name: "Snake Plant",
    price: "$15.00",
    image: [Snake],
  },
  {
    id: 3,
    name: "Chinese Plant",
    price: "$15.00",
    image: [Chinese],
  },
  {
    id: 4,
    name: "Peace lily",
    price: "$15.00",
    image: [Peace],
  },
  {
    id: 5,
    name: "Spider plant",
    price: "$15.00",
    image: [Spider],
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: "$15.00",
    image: [Rub],
  },
  {
    id: 7,
    name: "Pothos Plant",
    price: "$15.00",
    image: [Pothos],
  },
  {
    id: 8,
    name: "Monster Deliciosa",
    price: "$15.00",
    image: [Monster],
  },
  {
    id: 9,
    name: "Lucky Bamboo",
    price: "$15.00",
    image: [Lucky],
  },
  {
    id: 10,
    name: "Aloe Vera",
    price: "$15.00",
    image: [Aloe],
  },
  {
    id: 11,
    name: "Jade plant",
    price: "$15.00",
    image: [Jade],
  },
  {
    id: 12,
    name: "Areca Palm",
    price: "$15.00",
    image: [Areca],
  },
];

const InD = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 ">
      

      <h2 className='font-bold flex'> <span>Indoor Plants</span> <span className='text-primary text-2xl'><PiPottedPlantDuotone /> </span></h2>
      

      

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


export default InD