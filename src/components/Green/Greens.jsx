import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Greens = () => {
  return (
    <div className=" flex items-center justify-start p-10 b   ">
      <div className="bg-white/1 backdrop-blur rounded-md p-6 ">
        <h1 className="text-4xl font-bold text-white mt-14">Welcome to Greens <FontAwesomeIcon icon={faLeaf} className="text-green-500" /> </h1>
        <h2 className='text-primary font-semibold'>Plant Health and Care Guidelines</h2>
        <p className="mt-4 text-lg text-white">
        Taking care of your plants is essential to keep them healthy and thriving. Here are some simple tips to ensure their well-being:
           <h3 className='text-primary font-semibold'> 1.	Watering:</h3>
                Water your plants according to their needs. <br/>
                Some plants need daily watering, while others require water once a week.<br/>
                 Always check the soil before watering.
          <h3 className='text-primary font-semibold'> 2.   Sunlight:</h3>
                Place your plants in a spot with the right amount of sunlight.<br/>
                 Some plants need direct sunlight, while others grow better in the shade.
           <h3 className='text-primary font-semibold' > 3.	Soil and Nutrients:</h3>
                Use good-quality soil and add fertilizers when needed to help your plants grow strong and healthy.
          <h3 className='text-primary font-semibold'> 4.	Pest Control:</h3>
                Regularly check for pests or diseases.<br/> 
                If you notice any, use natural remedies or plant-friendly pesticides to protect your plant.
          <h3 className='text-primary font-semibold'> 5.	Pruning and Maintenance:</h3>
                Trim dead leaves and branches to encourage new growth and keep the plant in good shape.
        </p>
        <h4 className='text-white'> By following these simple steps, you can ensure that your plants stay healthy and beautiful for a long time</h4>
        <div className='text-white font-semibold mt-14'>
        <h2 className='text-primary'>.Sustainable Farming</h2>
    <p>Sustainable farming is an agricultural practice that focuses on producing food in ways that preserve the environment and support ecosystem health.
        <p>
            <h2 className='text-primary'>Key elements of sustainable farming include:</h2>
              <h3 className='text-primary'> 1.	Soil Health:</h3> Practices like crop rotation, composting, and using natural fertilizers help maintain soil fertility and prevent erosion.
              <h3 className='text-primary'> 2.	Water Conservation:</h3> Efficient irrigation systems, such as drip irrigation and rainwater harvesting, are used to minimize water waste.
              <h3 className='text-primary'> 3.	Biodiversity:</h3> Growing a variety of crops and maintaining natural habitats support ecosystem health and help reduce pests naturally.
              <h3 className='text-primary'> 4.	Reduced Chemical Use:</h3> By avoiding or minimizing synthetic chemicals, such as pesticides and fertilizers, sustainable farming reduces pollution and encourages healthier crops.
              <h3 className='text-primary'> 5.	Animal Welfare:</h3> Sustainable farming ensures that livestock are treated humanely, with proper living conditions, food, and space.
              <h3 className='text-primary'> 6.	Energy Efficiency:</h3> The use of renewable energy sources like solar and wind power helps reduce the carbon footprint of farming operations.
        </p>
           <h4>.This approach not only promotes environmental sustainability but also supports food security and the well-being of local communities. Sustainable farming practices are vital for ensuring long-term agricultural productivity while reducing harm to the planet.</h4>
        </p> 
        </div>
      </div>
    </div>
  );
};

export default Greens;
