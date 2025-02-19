

import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo3 from "../../assets/logo3.png"



const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className=" relative">
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-green-950 text-white">
      
        <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-1 p-10  items-center "> 
        <div className="flex place-items-center ">
          
              <div >
               <img src={logo3} alt="Logo" className="h-15 w-10" />
              </div>
               
             <h1> Eyes On Plants </h1> 
             
           
           
        </div>
        <div>
               <li className=" list-none  text-white">
                   Company
                </li>
                
        </div>
        <div>
           <li className=" list-none  text-white">
              Partnerships
           </li>
         
         </div>
         <div className="mb-4 md:mb-0">
            
              <div className="flex space-x-4">
                     <a
                      className="text-white hover:text-tertiary  transform hover:scale-150 
                        transition-all duration-150 ease-in-out" href="">
                           <FaGithub />
                      </a>
                      <a
                        className="text-white hover:text-tertiary   transform hover:scale-150
                           transition-all duration-150 ease-in-out" href="">
                               <FaLinkedinIn />
                      </a>
                      <a
                         className="text-white hover:text-tertiary  transform hover:scale-150
                           transition-all duration-150 ease-in-out" href="">
                             <FaTwitter />
                      </a>
                       <a
                          className="text-white hover:text-tertiary  transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                 <FaInstagram />
                         </a>
              </div>
           </div>
         </div>
         <h6 className="text-center">&copy; right Eyes on plants {Year}</h6>
     </div>
   </footer>
  )
}

export default Footer