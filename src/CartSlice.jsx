import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          item.name !== action.payload &&
          item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;