import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <div className="app">
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : showProductList ? (
        <ProductList
          onCartClick={handleCartClick}
          onHomeClick={handleHomeClick}
        />
      ) : (
        <div className="landing-page">
          <div className="background-image">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Discover beautiful plants and bring nature into your home.</p>

            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>

          <AboutUs />
        </div>
      )}
    </div>
  );
}

export default App;