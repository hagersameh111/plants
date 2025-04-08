import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Strawberries from "../../assets/Strawberries.jpg"
import Lemon from "../../assets/Lemon.jpg"
import Blueberries from "../../assets/Blueberries.jpg"
import Grapes from "../../assets/Grapes.jpg"
import Apples from "../../assets/Apples.jpg"
import Oranges from "../../assets/Oranges.jpg"
import Guava from "../../assets/Guava.jpg"
import Cherries from "../../assets/Cherries.jpg"
import { GiFruitTree } from "react-icons/gi";




import  { useState } from "react";

const products = [
  {
    id: 1,
    name: "Strawberries",
    price: "$15.00",
    image: [Strawberries],
  },
  {
    id: 2,
    name: "Lemon",
    price: "$15.00",
    image: [Lemon],
  },
  {
    id: 3,
    name: "Blueberries",
    price: "$15.00",
    image: [Blueberries],
  },
  {
    id: 4,
    name: "Grapes",
    price: "$15.00",
    image: [Grapes],
  },
  {
    id: 5,
    name: "Apples",
    price: "$15.00",
    image: [Apples],
  },
  {
    id: 6,
    name: "Oranges ",
    price: "$15.00",
    image: [Oranges],
  },
  {
    id: 7,
    name: "guava",
    price: "$15.00",
    image: [Guava],
  },
  {
    id: 8,
    name: "Cherries ",
    price: "$15.00",
    image: [Cherries],
  },
];

const Fruite = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      

      <h2 className='font-bold flex'> <span>Fruites</span> <span className='text-primary text-2xl'><GiFruitTree /> </span></h2>
      


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

export default Fruite