import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Sell from './Components/Sell';
import Header from './Components/Header';
import './App.css';


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [saleItems, setSaleItems] = useState(() => {
    const savedItems = localStorage.getItem("saleItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem("saleItems", JSON.stringify(saleItems));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [saleItems, cart]);

  const addItemForSale = (newItem) => {
    setSaleItems((prevItems) => [...prevItems, newItem]);
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <Router basename="/Nutrifit-supplements" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header cartCount={cart.length} />
        <div className={`notification ${showNotification ? "show" : ""}`}>
        Supplement added to cart!
      </div>
      <Routes>
        <Route path="/" element={<Home items={saleItems} addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cart} />}  />
        <Route path="/Sell" element={<Sell items={saleItems} addItem={addItemForSale} />} />
      </Routes>
    </Router>
  );
}

export default App;
