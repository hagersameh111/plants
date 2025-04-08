import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Nav = () => {
     const [searchTerm, setSearchTerm] = useState("");
    
     
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when clicking "Indoor Plant"
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" container mx-auto p-2 mt-14">
        <div className="flex space-x-6 text-gray-700 mb-2">
      <Link to="/Products">
        <span className="text-green-600 font-semibold cursor-pointer hover:text-primary">All Products</span>
      </Link>

      <Link to="/Indoor">
        <span className="cursor-pointer hover:text-primary">Indoor plants</span>
      </Link>

      {/* Indoor Plant Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className="cursor-pointer hover:text-primary flex items-center"
          onClick={toggleDropdown}
        >
        <span> Outdoor Plants </span>  <span> <MdArrowDropDown /></span>
        </button>
        {dropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
            <li><Link to="/Flowers" className="block px-4 py-2 hover:bg-green-100">Flowers</Link></li>
            <li><Link to="/Vegetables" className="block px-4 py-2 hover:bg-green-100">Vegetables</Link></li>
            <li><Link to="/Fruites" className="block px-4 py-2 hover:bg-green-100">Fruits</Link></li>
            <li><Link to="/Herbs" className="block px-4 py-2 hover:bg-green-100">Herbs</Link></li>
            <li><Link to="/Outdoor" className="block px-4 py-2 hover:bg-green-100">View All</Link></li>
            
           
            
          </ul>
        )}
      </div>

      <Link to="/Fertilizers">
        <span className="cursor-pointer hover:text-primary">Fertilizers</span>
      </Link>

      <Link to="/Equipment">
        <span className="cursor-pointer hover:text-primary">Equipment</span>
      </Link>
      <input 
             type="text"
              placeholder="Search products..."
              className="w-100  p-1 mb-4 border border-gray-300 bg-white  range accent-primary focus:outline-primary focus:outline outline-1 rounded-full  "
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
          /> 
      </div>
    </nav>
  );
};

export default Nav;


