import { Link} from "react-router-dom";
import p6 from "../../assets/p6.jpg"
import { TiWaves } from "react-icons/ti";
import { GiPlantWatering } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
const Hero= () => {
  return (
    <div  className="mt-20">
    <div className="flex justify-center items-center  ">
      <section className="flex flex-col md:flex-row items-center justify-between bg-green-100 ps-5 rounded-tl-[70px] rounded-br-[70px] shadow-lg w-[1100px] h-[600px] ">
        {/* Left Side */}
        <div className="max-w-lg text-left w-[500px]">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Plant Makes a <br />
            <span className="text-black">Positive impact on</span><br/>
            <span className="text-green-600"> your environment!</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Shop Your Favorite Plants In Your Favorable Factor,<br/>
             Veggies, Seeds, Citrus, Herbs And More.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-900 text-white font-bold rounded-lg hover:bg-green-700">
            <Link to="../Products">
            Shop Now
            </Link>
            
          </button>
        </div>

        {/* Right Side - Image and Info */}
        <div className="relative flex flex-col place-items-end">
          <div className="absolute top-20 p-20  rounded-lg ">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl"> <TiWaves /></span>
              <p className="text-gray-800 text-xl font-semibold">Humidity: <br/><span className="text-gray-500 text-sm font-extralight">60%</span></p>
              
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 text-2xl "><GiPlantWatering /> </span>
              <p className="text-gray-800 text-xl font-semibold">Watering: <br/><span className="text-gray-500 text-sm font-extralight">2 in 7 Days</span></p>
              
            </div>
            <div className="flex items-center gap-2 mt-2">
             <span className="text-green-600 text-2xl"><MdOutlineWbSunny /></span>
              <p className="text-gray-800 text-xl font-semibold">Sun Light: <br/><span className="text-gray-500 text-sm font-extralight">4 To 5 Hours</span></p> 
              
            </div>
          </div>
          <img
            src={p6}
            alt="Plants"
            className=" rounded-tl-[70px] rounded-br-[70px] shadow-md h-[600px] w-[450px]"
          />
        </div>
      </section>
    </div>
  </div>);
};


export default Hero;