import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Greens = () => {
  return (
    <div className="h-screen flex items-center justify-start p-10 b ">
      <div className="bg-white/1 backdrop-blur rounded-md p-6 max-w-lg">
        <h1 className="text-4xl font-bold text-quaternary">Welcome to Greens <FontAwesomeIcon icon={faLeaf} className="text-green-500" /> </h1>
        <p className="mt-4 text-lg text-quaternary">
          Explore the beauty and benefits of greenery.
           Plants are not just decorations—they are essential for a healthier, happier lifestyle. Start your journey toward a greener planet today!
        </p>
      </div>
    </div>
  );
};

export default Greens;
