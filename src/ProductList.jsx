import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb3?w=400" },
      { id: 2, name: "Peace Lily", price: 399, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Spider Plant", price: 279, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 5, name: "Boston Fern", price: 349, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400" },
      { id: 6, name: "Rubber Plant", price: 599, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 8, name: "Jade Plant", price: 249, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 9, name: "Echeveria", price: 349, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
      { id: 10, name: "Haworthia", price: 299, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 11, name: "String of Pearls", price: 399, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 12, name: "Zebra Plant", price: 329, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { id: 13, name: "Tulsi", price: 149, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 14, name: "Neem Plant", price: 249, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 15, name: "Mint Plant", price: 99, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 16, name: "Lemongrass", price: 129, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400" },
      { id: 17, name: "Lavender", price: 299, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" },
      { id: 18, name: "Rosemary", price: 199, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }
    ]
  }
];

function ProductList({ onCartClick, onHomeClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addedToCart = {};

  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-page">

      <nav className="navbar">
        <h2>e-plantShopping</h2>

        <div className="navbar-links">
          <button onClick={onHomeClick}>Home</button>
          <button onClick={() => window.scrollTo(0, 0)}>Plants</button>
          <button onClick={onCartClick}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      <h1>Our Beautiful Plants</h1>
      <p>Explore our collection of beautiful indoor plants.</p>

      {plantsArray.map((category) => (
        <section className="category-section" key={category.category}>

          <h2>{category.category}</h2>

          <div className="plant-grid">

            {category.plants.map((plant) => (
              <div className="plant-card" key={plant.id}>

                <img
                  src={plant.image}
                  alt={plant.name}
                />

                <h3>{plant.name}</h3>

                <p>Price: ₹{plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>

              </div>
            ))}

          </div>
        </section>
      ))}

    </div>
  );
}

export default ProductList;