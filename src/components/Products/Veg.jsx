import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from "react";
import Tomato from "../../assets/Tomato.jpg"
import Cucumbers from "../../assets/Cucumbers.jpg"
import Eggplants from "../../assets/Eggplants.jpg"
import tomatos from "../../assets/tomatos.jpg"
import Lettuce from "../../assets/Lettuce.jpg"
import Peppers from "../../assets/Peppers.jpg"
import Spinach from "../../assets/Spinach.jpg"
import Carrots from "../../assets/Carrots.jpg"
import GreenBeans from "../../assets/GreenBeans.jpg"
import green from "../../assets/green.jpg"
import greenonion from "../../assets/greenonion.jpg"
import garlic from "../../assets/garlic.jpg"
import { GiPlantRoots } from "react-icons/gi";


const products = [
  {
    id: 1,
    name: "Cherry tomato",
    price: "$15.00",
    image: [Tomato],
  },
  {id: 2, name: "Tomatos",price: "$15.00",image: [tomatos], },
  {
    id: 3,
    name: "Eggplants",
    price: "$15.00",
    image: [Eggplants],
  },
  {
    id: 4,
    name: "Cucumber",
    price: "$15.00",
    image: [Cucumbers],
  },
  {
    id: 5,
    name: "Lettuce",
    price: "$15.00",
    image: [Lettuce],
  },
  {
    id: 6,
    name: " Red Peppers",
    price: "$15.00",
    image: [Peppers],
  },
  {
    id: 7,
    name: "Spnach",
    price: "$15.00",
    image: [Spinach],
  },
  {
    id: 8,
    name: "Carrots",
    price: "$15.00",
    image: [Carrots],
  },
  {
    id: 9,
    name: "Green peppers",
    price: "$15.00",
    image: [green],
  },
  {
    id: 10,
    name: "Green Beans",
    price: "$15.00",
    image: [GreenBeans],
  },
  {
    id: 11,
    name: "Green Onion",
    price: "$15.00",
    image: [greenonion],
  },
  {
    id: 12,
    name: "Garlic",
    price: "$15.00",
    image: [garlic],
  },
];

const Veg = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
    
      
    <h2 className='font-bold flex'> <span>Vegetables </span> <span className='text-primary text-2xl'><GiPlantRoots /></span></h2>
     

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

export default Veg