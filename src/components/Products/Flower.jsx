import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from "react";
import Zinnias from "../../assets/Zinnias.jpg"
import Sunflower from "../../assets/Sunflower.jpg"
import Petunias from "../../assets/Petunias.jpg"
import Marigolds from "../../assets/Marigolds.jpg"
import Rose from "../../assets/Rose.jpg"
import Geraniums from "../../assets/Geraniums.jpg"
import Chry from "../../assets/Chrysanthemums.jpg"
import Bou from "../../assets/Bougainvillea.jpg"
import Lavender from "../../assets/Lavender.jpg"
import Lantana from "../../assets/Lantana.jpg"
import Jasminee from "../../assets/Jasminee.jpg"
import Hibiscus from "../../assets/Hibiscus.jpg"
import { GiVineFlower } from "react-icons/gi";


const products = [
  {
    id: 1,
    name: "Zinnias",
    price: "$15.00",
    image: [Zinnias],
  },
  {
    id: 2,
    name: "Sunflower",
    price: "$15.00",
    image: [Sunflower],
  },
  {
    id: 3,
    name: "Petunias",
    price: "$15.00",
    image: [Petunias],
  },
  {
    id: 4,
    name: "Rose",
    price: "$15.00",
    image: [Rose],
  },
  {
    id: 5,
    name: "Marigolds",
    price: "$15.00",
    image: [Marigolds],
  },
  {
    id: 6,
    name: "Geraniums",
    price: "$15.00",
    image: [Geraniums],
  },
  {
    id: 7,
    name: "Bougainvillea",
    price: "$15.00",
    image: [Bou],
  },
  {
    id: 8,
    name: "Chrysanthemums",
    price: "$15.00",
    image: [Chry],
  },
  {
    id: 9,
    name: "Lantana",
    price: "$15.00",
    image: [Lantana],
  },
  {
    id: 10,
    name: "Lavender",
    price: "$15.00",
    image: [Lavender],
  },
  {
    id: 11,
    name: "Jasmine",
    price: "$15.00",
    image: [Jasminee],
  },
  {
    id: 12,
    name: "Hibiscus",
    price: "$15.00",
    image: [Hibiscus],
  },
];

const Flower = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
    
      <h2 className='font-bold flex'> <span>Flowers</span> <span className='text-primary text-2xl'><GiVineFlower /></span></h2>

     

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


export default Flower