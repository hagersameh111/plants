import { Link} from "react-router-dom";
import Capture from "../../assets/Capture.jpg"
import { FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiPlantThin } from "react-icons/pi";
import g2 from "../../assets/g2.png"


const Hero1 = () => {
  return (

    <div className="mt-2">
        <div className='flex justify-center items-center ' >
    <div  className="flex flex-col md:flex-row items-center justify-start \shadow-lg w-[1100px] h-[600px] ">
    <div className="rounded-[10px] pr-20">
            <img
                        src={g2}
                        alt="Plants"
                        className=" shadow-md w-[400px] h-[350px] "
                      />
        </div>
        <div className="flex flex-col md:flex-row items-center  " >
            <div className="max-w-lg text-left ">
          <h3 className="text-lg md:text-lg font-bold text-gray-500">
            <span className="text-gray-800 text-3xl md:text-4xl font-extrabold">Learn More About Our Gardening</span><br/>
          </h3>
          <p className="text-gray-800 font-bold mt-4">
            want to learn how to grow your own green space,<br/>
             Veggies, Seeds, Citrus, Herbs And More all organic.<br/>
             in our go green page you will learn all about gardning, recycling, and sustanbilty
          </p>
          <button className="mt-6 px-6 py-3">
           
           <Link to="../Green">
            <div className="flex items-center gap-2">
                          
                          <p className="mt-6 px-6 py-3 bg-green-900 text-white font-bold rounded-lg hover:bg-green-700"> Read more </p>
                          
                        </div>
            </Link>
            
          </button>
        </div>

            </div>
        
    </div>
</div>
        <div className="flex justify-center items-center p-10 ">
            <div className="flex flex-col md:flex-row items-center justify-between  " >
            <div className="max-w-lg text-left ">
          <h3 className="text-lg md:text-lg font-bold text-gray-500">
            Indoor / Outdoor <br />
            <span className="text-green-600 text-3xl md:text-5xl font-bold">House Plants</span><br/>
            <span className="text-gray-700 text-2xl"> New trends in 2025</span>
          </h3>
         
          <button className="mt-6 px-6 py-3">
           
           <Link to="../Products">
            <div className="flex items-center gap-2">
                          
                          <p className="text-gray-800 text-xl font-semibold"> Discover more </p>
                          <span className="text-black text-2xl"><FaArrowRight /> </span>
                        </div>
            </Link>
            
          </button>
        </div>

            </div>
            <div className="p-8">
            <img
                        src={Capture}
                        alt="Plants"
                        className=" shadow-md w-[800px] h-[250px] "
                      />
        </div>

        </div>
        <div className="flex justify-center items-center min-h-[150px]">
  <div className="flex flex-col lg:flex-row items-center justify-center bg-green-100 px-8 py-6 rounded-[20px] shadow-lg w-[1100px] h-[100px] gap-10">
    <div className="flex items-center gap-10">
      {/* Fast Delivery */}
      <div className="flex items-center gap-6">
        <span className="text-green-600 text-2xl">
          <TbTruckDelivery />
        </span>
        <p className="text-gray-800 text-xl font-semibold">
          Fast Delivery <br />
          <span className="text-gray-500 text-sm font-extralight">2 to 5 working days</span>
        </p>
      </div>

      {/* Secure Payment */}
      <div className="flex items-center gap-6">
        <span className="text-green-600 text-2xl">
          <RiSecurePaymentLine />
        </span>
        <p className="text-gray-800 text-xl font-semibold">
          Secure Payment <br />
          <span className="text-gray-500 text-sm font-extralight">Back guarantee up to 30 days</span>
        </p>
      </div>

      {/* Organic Ingredients */}
      <div className="flex items-center gap-6">
        <span className="text-green-600 text-2xl">
          <PiPlantThin />
        </span>
        <p className="text-gray-800 text-xl font-semibold">
          Organic Ingredients <br />
          <span className="text-gray-500 text-sm font-extralight">All sustainable</span>
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Hero1