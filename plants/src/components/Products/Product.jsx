import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import g1 from "../../assets/g1.webp"
import { Link } from 'react-router-dom';
import { GiPlantRoots } from "react-icons/gi";


import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 2,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 3,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 4,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 5,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 6,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 7,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 8,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 9,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 10,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 11,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
  {
    id: 12,
    name: "Cereus Cactus",
    price: "$15.00",
    image: [g1],
  },
];

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h2 className=" flex text-3xl font-bold text-gray-900 mb-6">Our Products <span className='text-green-900'><GiPlantRoots /></span>
      </h2>

      {/* Search Bar */}
      

      {/* Categories */}
      <div className="flex space-x-6 text-gray-700 mb-6">
        <span className="text-green-600 font-semibold cursor-pointer">All Products</span>
        <span className="cursor-pointer">Plants</span>
        <span className="cursor-pointer">Outdoor Plant</span>
        <span className="cursor-pointer">Indoor Plant</span>
        <span className="cursor-pointer">Fertilizers</span>
      <span className="cursor-pointer">  Equipment </span>
        <input 
        type="text"
        placeholder="Search products..."
        className="w-100  p-1 mb-4 border border-gray-300 bg-white  range accent-primary focus:outline-primary focus:outline outline-1 rounded-full  "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      </div>

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