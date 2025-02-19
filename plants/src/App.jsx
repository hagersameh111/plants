import './index.css';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favourites from './pages/Favourites';
import Products from './pages/Products'
import Userinfo from './pages/Userinfo';
import Reg from './pages/Reg';
import Green from './pages/Green';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route index element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path='/Favourites' element={<Favourites/>}/>
    <Route path='Products' element={<Products/>}/>
    <Route path='/Userinfo' element={<Userinfo/>}/>
    <Route path='/Reg' element={<Reg/>}/>
    <Route path='/Green' element={<Green/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App