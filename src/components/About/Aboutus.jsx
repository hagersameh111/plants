
import phone from "../../assets/phone (1).png";
import Capture5 from "../../assets/Capture5 (1).png";
import Capture4 from "../../assets/Capture4 (1).png"
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { AiOutlineScan } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";

import tom from "../../assets/tom_enhanced.png"
import { GiPlantRoots } from "react-icons/gi";
import { IoIosAlarm } from "react-icons/io";








const Aboutus = () => {
  return (
    <div >
    <div className="relative bg-white py-20 px-10 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-green-800 leading-tight">
          Start using our mobile app now
        </h2>
        <p className="text-gray-600 mt-4">
         Grow your own garden without any experince, using our unique features
        </p>

        {/* Buttons */}
        <div className="flex mt-6 gap-4  items-center place-items-end ">
          <span className="w-36 cursor-pointer  text-gray-800 text-xl "><FaGooglePlay /> <span>  on google play</span></span>
        

        <span className="w-36 cursor-pointer text-gray-800 text-xl"> <FaAppStoreIos /> <span>  on app store</span>
        </span>
         
        </div>
      </div>

      {/* Right Content - Floating Phones */}
      <div className="relative mt-10 md:mt-0">
        <img
          src={phone}
          alt="Mockup 1"
          className=" w-[550px] h-[450px] transform left-10 md:left-20 top-5 "
        />
        
      </div>
      
    </div>
    <div className="flex justify-center items-center min-h-[150px]">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-green-100 px-8 py-6 rounded-[20px] shadow-lg w-[1000px] h-[100px] gap-10">
        <div className="flex items-center gap-14">
          
          <div className="flex items-center gap-6">
            <span className="text-green-600 text-2xl">
            <AiOutlineScan />

            </span>
            <p className="text-gray-800 text-xl font-semibold">
              Scanner<br />
              <span className="text-gray-500 text-sm font-extralight">Top feature </span>
            </p>
          </div>
    
          {/* Secure Payment */}
          <div className="flex items-center gap-6">
            <span className="text-green-600 text-2xl">
              <IoIosAlarm />
            </span>
            <p className="text-gray-800 text-xl font-semibold">
              Alarm <br />
              <span className="text-gray-500 text-sm font-extralight">Date & Time</span>
            </p>
          </div>
    
          {/* Organic Ingredients */}
          <div className="flex items-center gap-6">
            <span className="text-green-600 text-2xl">
            <GiPlantRoots />
            </span>
            <p className="text-gray-800 text-xl font-semibold">
              Tips <br />
              <span className="text-gray-500 text-sm font-extralight">Grow sustainable</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center gap-10 px-10 py-10">
      
  {/* Left - Image */}
  <div className="relative">
    <img
      src={Capture4}
      alt="Mockup 1"
      className="w-[600px] h-auto"
    />
  </div>

  {/* Right - Text Content */}
  <div className="w-[600px] flex flex-col gap-4">
    <h1 className="text-4xl text-green-800 flex items-center gap-2">
      <span>Scan</span> 
      <span className="text-green-600"><AiOutlineScan /></span>
    </h1>
    <ul className="mt-2 space-y-2 text-2xl">
      <li>Identifying plant type</li>
      <li>Identifying diseases</li>
      <li>Offering solutions</li>
    </ul>
  </div>
</div>
<div className="flex items-center justify-center gap-10 px-10 py-10">
      
      
      {/* Left - Image */}
      <div className="relative ">
        <img
          src={Capture5}
          alt="Mockup 1"
          className="w-[600px] h-auto "
        />
      </div>
     {/* Right - Text Content */}
       <div className="w-[600px] flex flex-col gap-4">
        <h1 className="text-4xl text-green-800 flex items-center gap-2 ">
          <span>Notification</span> 
          <span className="text-green-600"><MdOutlineNotificationsActive />
          </span>
        </h1>
        <ul className="mt-2 space-y-2 text-2xl">
          <li>Reminder </li>
          <li>Identifying diseases</li>
          <li>Offering solutions</li>
        </ul>
      </div>
     
    </div>
    <div className="flex items-center justify-center gap-10 px-10 py-10">
      
      {/* Left - Image */}
      <div className="relative ">
        <img
          src={tom}
          alt="Mockup 1"
          className="w-[600px] h-auto "
        />
      </div>
    
      {/* Right - Text Content */}
      <div className="w-[600px] flex flex-col gap-4">
        <h1 className="text-4xl text-green-800 flex items-center gap-2 sha">
          <span>Tips</span> 
          <span className="text-green-600"><GiPlantRoots /> </span>
        </h1>
        <ul className="mt-2 space-y-2 text-2xl">
          <li>Reminder </li>
          <li>Identifying diseases</li>
          <li>Offering solutions</li>
        </ul>
      </div>
    </div>

    </div>
  );
};

export default Aboutus