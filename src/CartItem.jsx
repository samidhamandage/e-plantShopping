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

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <header className="shop-header">
        <h1>Paradise Nursery</h1>
        <button onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </header>

      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Add some beautiful plants to your cart.</p>
          <button onClick={onContinueShopping}>
            Explore Plants
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => handleIncrease(item)}>
                      +
                    </button>
                  </div>

                  <p>
                    Subtotal: ₹{item.price * item.quantity}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Amount: ₹{totalAmount}</h3>

            <button onClick={() => alert("Thank you for shopping with Paradise Nursery!")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;