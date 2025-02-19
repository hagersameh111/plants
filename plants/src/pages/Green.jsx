import Greens from "../components/Green/Greens";
import Navbar from "../components/Navbar/Navbar";
import v2 from "../assets/v2.mp4";
import Footer from "../components/Footer/Footer";

const Green = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[700px] w-full">
        <video
          src={v2}
          className="absolute right-0 top-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        ></video>
        <Greens />
      </div>
      
    </div>
  );
};

export default Green;
