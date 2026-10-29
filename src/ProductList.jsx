import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb3?w=400"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 199,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 249,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 279,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 6,
    name: "Echeveria",
    price: 349,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  }
];

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Air Purifying",
    "Medicinal",
    "Succulents"
  ];

  const filteredPlants =
    selectedCategory === "All"
      ? plants
      : plants.filter(
          (plant) => plant.category === selectedCategory
        );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      <header className="shop-header">
        <h1>Paradise Nursery</h1>

        <button onClick={onCartClick}>
          🛒 Cart ({cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )})
        </button>
      </header>

      <h2>Our Beautiful Plants</h2>
      <p>Bring nature into your home with our beautiful plants.</p>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? "active" : ""
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="plant-grid">
        {filteredPlants.map((plant) => {
          const alreadyAdded = cartItems.some(
            (item) => item.id === plant.id
          );

          return (
            <div className="plant-card" key={plant.id}>
              <img src={plant.image} alt={plant.name} />

              <h3>{plant.name}</h3>
              <p>{plant.category}</p>
              <h4>₹{plant.price}</h4>

              <button
                onClick={() => handleAddToCart(plant)}
                disabled={alreadyAdded}
              >
                {alreadyAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;