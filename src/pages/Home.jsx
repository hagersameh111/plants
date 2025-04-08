import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Hero1 from '../components/Hero/Hero1';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="h-[700px]">
          <Hero />
        </section>
        <section className="h-[1200px]">
          <Hero1 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;