import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
    return (
      <div className="h-full flex justify-center items-center">
        
        <div
          className="relative"
          style={{ transform: "translate(5%, 130%)" }} // Moves content slightly left and up
        >
          
          <div className="bg-blurr rounded-md relative mt-4">
            <div className="px-5"> 
             <div className="text-white text-2xl ">
          <h2>
            Find a plant to suit your personality <FontAwesomeIcon icon={faPagelines} className="text-primary text-2xl" />
          </h2>
        </div>
              <div>
                <label htmlFor="Plants" className="text-quaternary">
                   Search Any Plant . <FontAwesomeIcon icon={faLeaf} className="text-green-500" /> 
                </label>
                 </div>
                <input
                  type="text"
                  name="plants"
                  id="roses"
                  placeholder="roses"
                  className="w-60 bg-white  my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
           
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
  
  
  