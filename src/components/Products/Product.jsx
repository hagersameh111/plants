import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  { useState } from "react"; 
import Zinnias from "../../assets/Zinnias.jpg"
import Marigolds from "../../assets/Marigolds.jpg"
import Chry from "../../assets/Chrysanthemums.jpg"
import Jasminee from "../../assets/Jasminee.jpg"
import Hibiscus from "../../assets/Hibiscus.jpg"
import ZZ from '../../assets/ZZ.jpg'
import Snake from '../../assets/Snake.jpg'
import Aloe from '../../assets/Aloe.jpg'
import Jade from '../../assets/Jade.jpg'
import Tomato from "../../assets/Tomato.jpg"
import Cucumbers from "../../assets/Cucumbers.jpg"
import greenonion from "../../assets/greenonion.jpg"


const products = [
  {
    id: 1,
    name: "Hibiscus",
    price: "$15.00",
    image: [Hibiscus],
  },
  {
    id: 2,
    name: "Zinnias",
    price: "$15.00",
    image: [Zinnias],
  },
  {
    id: 3,
    name: "Jade",
    price: "$15.00",
    image: [Jade],
  },
  {
    id: 4,
    name: "Aloe",
    price: "$15.00",
    image: [Aloe],
  },
  {
    id: 5,
    name: "Jasminee",
    price: "$15.00",
    image: [Jasminee],
  },
  {
    id: 6,
    name: "Tomato",
    price: "$15.00",
    image: [Tomato],
  },
  {
    id: 7,
    name: "greenonion",
    price: "$15.00",
    image: [greenonion],
  },
  {
    id: 8,
    name: "Marigolds",
    price: "$15.00",
    image: [Marigolds],
  },
  {
    id: 9,
    name: "Cucumbers",
    price: "$15.00",
    image: [Cucumbers],
  },
  {
    id: 10,
    name: "Snake",
    price: "$15.00",
    image: [Snake],
  },
  {
    id: 11,
    name: "ZZ",
    price: "$15.00",
    image: [ZZ],
  },
  {
    id: 12,
    name: "Chry",
    price: "$15.00",
    image: [Chry],
  },
];

const Product = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
    
      

     

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



export default Product;