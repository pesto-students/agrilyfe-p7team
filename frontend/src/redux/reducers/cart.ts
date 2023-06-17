import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  //@ts-ignore
  cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};

export const cartReducer = createReducer(initialState, {
  addToCart: (state: any, action: any) => {
    const item = action.payload;
    const isItemExist = state.cart.find((i: any) => i._id === item._id);
    if (isItemExist) {
      return {
        ...state,
        cart: state.cart.map((i: any) => (i._id === isItemExist._id ? item : i)),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, item],
      };
    }
  },

  removeFromCart: (state: any, action: any) => {
    return {
      ...state,
      cart: state.cart.filter((i: any) => i._id !== action.payload),
    };
  },
});
