import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import pot from "../../assets/pot.jpg"
import pot1 from "../../assets/pot1.jpg"
import pot2 from "../../assets/pot2.jpg"
import GardenHoe from "../../assets/GardenHoe.jpg"
import Gloves from "../../assets/Gloves.jpg"
import HandTrowel from "../../assets/HandTrowel.jpg"
import PruningShears from "../../assets/PruningShears.jpg"
import SoilHandMoisture from "../../assets/SoilpHandMoisture Meter.jpg"
import SprayBottle from "../../assets/SprayBottle.jpg"
import WateringCan from "../../assets/WateringCan.jpg"
import Fork from "../../assets/Fork.jpg"
import pot3 from "../../assets/pot3.jpg"
import { Link } from 'react-router-dom';
import { GiFlowerPot } from "react-icons/gi";




import  { useState } from "react";

const products = [
  {
    id: 1,
    name: "White Pot",
    price: "$15.00",
    image: [pot],
  },
  {
    id: 2,
    name: "Gardning Gloves",
    price: "$15.00",
    image: [Gloves],
  },
  {
    id: 3,
    name: "Hand Trowel",
    price: "$15.00",
    image: [HandTrowel],
  },
  {
    id: 4,
    name: "Black Pots",
    price: "$15.00",
    image: [pot1],
  },
  {
    id: 5,
    name: "Garden Hoe",
    price: "$15.00",
    image: [GardenHoe],
  },
  {
    id: 6,
    name: "Clay Pot",
    price: "$15.00",
    image: [pot2],
  },
  {
    id: 7,
    name: "Soil ph and moisture metere",
    price: "$15.00",
    image: [SoilHandMoisture],
  },
  {
    id: 8,
    name: "Watering Can",
    price: "$15.00",
    image: [WateringCan],
  },
  {
    id: 9,
    name: "Spray Bottle",
    price: "$15.00",
    image: [SprayBottle],
  },
  {
    id: 10,
    name: "Pruning Shears",
    price: "$15.00",
    image: [PruningShears],
  },
  {
    id: 11,
    name: "Garden Fork",
    price: "$15.00",
    image: [Fork],
  },
  {
    id: 12,
    name: "Clay Pots",
    price: "$15.00",
    image: [pot3],
  },
];

const Equ = () => {
  const [searchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      

      
      <h2 className='font-bold flex'> <span>Equpmint</span> <span className='text-primary text-2xl'><GiFlowerPot /></span></h2>

2
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
export default Equ