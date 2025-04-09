import './index.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favourites from './pages/Favourites';
import Products from './pages/Products';
import Userinfo from './pages/Userinfo';
import Reg from './pages/Reg';
import Green from './pages/Green';
import About from './pages/About';
import Outdoor from './pages/Outdoor';
import Indoor from './pages/Indoor';
import Product from './components/Products/Product';
import Equipment from './pages/Equipment';
import Fertilizers from './pages/Fertilizers';
import Flowers from './pages/Flowers';
import Herbs from './pages/Herbs';
import Vegetables from './pages/Vegetables';
import Fruites from './pages/Fruites';

const App = () => {
  return (
    <BrowserRouter basename="/plants">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="products" element={<Products />} />
          <Route path="userinfo" element={<Userinfo />} />
          <Route path="reg" element={<Reg />} />
          <Route path="green" element={<Green />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="outdoor" element={<Outdoor />} />
          <Route path="indoor" element={<Indoor />} />
          <Route path="fertilizers" element={<Fertilizers />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="flowers" element={<Flowers />} />
          <Route path="herbs" element={<Herbs />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruites" element={<Fruites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;