import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-container">

      <nav className="navbar">
        <h2>e-plantShopping</h2>

        <div className="navbar-links">
          <button onClick={onContinueShopping}>Home</button>
          <button onClick={onContinueShopping}>Plants</button>
          <button>🛒 Cart ({cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )})</button>
        </div>
      </nav>

      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <button
            className="get-started-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>Unit Price: ₹{item.price}</p>

                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => handleIncrement(item)}>
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>

            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Amount: ₹{totalAmount}</h3>

            <button
              className="get-started-button1"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}

      <button
        className="get-started-button"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </button>

    </div>
  );
}

export default CartItem;