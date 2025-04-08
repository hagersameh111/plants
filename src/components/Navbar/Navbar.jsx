import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../Navbar/Responsivemenu";
import { useState, useEffect } from "react";
import logo3 from "../../assets/logo3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/Products" },
  { name: "Go green", link: "/Green" },
  { name: "About us ", link: "/About" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 right-0 w-full z-50 bg-transparent text-black font-medium transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex justify-between place-items-center">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo3} alt="Logo" className="h-13 w-10" />
            </Link>
            <h1 className="text-2xl font-extrabold">Eyes On Plants</h1>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? "active" : "hover:text-primary text-quaternary-600"
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
            <ul className="flex justify-between items-center gap-4">
              <li>
                <Link to="/Favourites" className="hover:text-primary transition duration-300">
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
              <li>
                <Link to="/Cart" className="hover:text-primary transition duration-300">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
              <li>
                <Link to="/Userinfo" className="hover:text-primary transition duration-300">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer" size={30} aria-label="Close menu" />
              ) : (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} aria-label="Open menu" />
              )}
            </div>
          </div>
        </div>
      </div>

      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} links={NavbarLinks} />
    </nav>
  );
};

export default Navbar;

