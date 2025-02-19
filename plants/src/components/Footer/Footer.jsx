

import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";



const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className=" relative bg-quinary text-quaternary">
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-quinary ">
      <svg data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-tertiary"></path>
                </svg>
        <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20"> 
        <div className="flex flex-col gap-5">
           <h2 className="text-3xl text-quaternary">
              Footer
           </h2>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
             vel ipsa reiciendis corporis similique dolor earum aut itaque.
            </p>
        </div>
        <div>
               <li className="text-[22px] list-none font-semibold text-quaternary py-2 uppercase">
                   Company
                </li>
                <li className="my-4 list-none">Careers</li>
                <li className="my-4 list-none">Tips & Tricks</li>
                <li className="my-4 list-none">Tech Support</li>
        </div>
        <div>
           <li className="text-[22px] list-none font-semibold text-quaternary py-2 uppercase">
              Partnerships
           </li>
           <li className="my-4 list-none">Soil</li>
           <li className="my-4 list-none">Farms</li>
           <li className="my-4 list-none">Transportation</li>
         </div>
         <div className="mb-4 md:mb-0">
            <h2 className="text-[22px] font-semibold text-quaternary  py-2 uppercase">Contact</h2>
              <p className="text-[16px] my-4">Email: youremail.mail.com</p>
              <p className="text-[16px] my-4">Phone: +20 113-456-7890 </p>
              <div className="flex space-x-4">
                     <a
                      className="text-white hover:text-quaternary  transform hover:scale-150 
                        transition-all duration-150 ease-in-out" href="">
                           <FaGithub />
                      </a>
                      <a
                        className="text-white hover:text-quaternary  transform hover:scale-150
                           transition-all duration-150 ease-in-out" href="">
                               <FaLinkedinIn />
                      </a>
                      <a
                         className="text-white hover:text-quaternary  transform hover:scale-150
                           transition-all duration-150 ease-in-out" href="">
                             <FaTwitter />
                      </a>
                       <a
                          className="text-white hover:text-quaternary  transform hover:scale-150
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