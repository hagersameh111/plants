import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../Navbar/Responsivemenu";
import { useState } from "react";
import logo3 from "../../assets/logo3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';





export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/Products" },
  { name: "Go green", link: "/Green" },
  { name: "About us ", link: "/About" },
  
];
// eslint-disable-next-line react/prop-types
const Navbar = ( ) => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white text-black ">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
           
            <div className="flex justify-between place-items-center">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo3} alt="Logo" className="h-13 w-10" />

              </Link>
              <h1 className="text-2xl font-extrabold">Eyes On Plants</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((link) => (
                  <li key={link.name} className="py-4">
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        isActive 
                          ? "active" 
                          : "text-quaternary-600 hover:text-primary-800"
                      }
                      aria-label={link.name}
                    >
                      {link.name}
                    </NavLink>
                    
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="flex items-center gap-4">
             <div className="hover:to-primary">
              <ul className="flex justify-between items-center gap-4">
              <li>
              <button className="hover:text-primary transition duration-300"
              >
                 <Link to="/Favourites" >
                   <FontAwesomeIcon icon={faHeart} />
                  </Link>
              
                </button>
                </li>
             <li>
             <button
                className="hover:text-primary transition duration-300"
              >
                 <Link to="/Cart" >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>
           
                </button>
             
              </li>
             <li>
             <button
                className="hover:text-primary transition duration-300"
              >
                 <Link to="/Userinfo" >
                   <FontAwesomeIcon icon={faUser} />
                  </Link>
                  
                </button>
            
              </li>
               </ul>
              </div>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                    aria-label="Close menu"
                  />
                ) : (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer"
                    size={30}
                    aria-label="Open menu"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ResponsiveMenu
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          links={NavbarLinks}
        />
      </nav>
    </>
  );
};

export default Navbar;
