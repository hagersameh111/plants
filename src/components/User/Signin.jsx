import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">


      <div className="flex w-[900px] shadow-lg rounded-lg overflow-hidden">

         {/* Right Side - Sign Up */}
         <div className="w-1/2 bg-white p-10 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-600">Welcome back!</h2>
          <div className="flex space-x-4 mt-4">
            <button className="p-2 border rounded-full text-green-600 hover:bg-green-100">
              <FaFacebookF />
            </button>
            <button className="p-2 border rounded-full text-green-600 hover:bg-green-100">
              <FaGoogle />
            </button>
            <button className="p-2 border rounded-full text-green-600 hover:bg-green-100">
              <FaLinkedinIn />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">or use your email to Login:</p>
          
          <input type="text" placeholder="Name" className="mt-4 px-4 py-2 w-full border rounded-md focus:outline-green-500" />
          <input type="email" placeholder="Email" className="mt-4 px-4 py-2 w-full border rounded-md focus:outline-green-500" />
          <input type="password" placeholder="Password" className="mt-4 px-4 py-2 w-full border rounded-md focus:outline-green-500" />
          
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
            Log In
          </button>
          
        </div>
        {/* Left Side - Sign In */}
        <div className="w-1/2 bg-green-600 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold">Or Create your Account</h2>
          <p className="text-sm text-white mt-4 text-center">
            To keep connected with us please Sign up with your personal info
          </p>
          <Link to="/Reg">
          <button className="mt-6 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-green-600 transition">
            SIGN IN
          </button>
          </Link>
        </div>
        
       
      </div>
    </div>
  );
};


export default Signin