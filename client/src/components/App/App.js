import './App.css';
import {Route, Routes} from 'react-router-dom'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Shop from '../../pages/Shop';
import Contact from '../../pages/Contact';
import Checkout from '../../pages/Checkout';
import Basket from '../../pages/Basket';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
