import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const countItems = state.items.find(
        (obj) => obj.id === action.payload.id
      );
      if (countItems) {
        countItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.count * obj.price;
      }, 0);
    },
  },
});

export const cartSelector = (state) => state.cart;

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
