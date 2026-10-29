import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      {page === "home" && (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful plants and make your home
            greener, healthier, and happier.
          </p>

          <button onClick={() => setPage("products")}>
            Get Started
          </button>

          <AboutUs />
        </div>
      )}

      {page === "products" && (
        <ProductList
          onCartClick={() => setPage("cart")}
        />
      )}

      {page === "cart" && (
        <CartItem
          onContinueShopping={() => setPage("products")}
        />
      )}
    </div>
  );
}

export default App;