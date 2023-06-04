import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  //@ts-ignore
  wishlist: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [],
};

export const wishlistReducer = createReducer(initialState, {
  addToWishlist: (state: any, action: any) => {
    const item = action.payload;
    const isItemExist = state.wishlist.find((i: any) => i._id === item._id);
    if (isItemExist) {
      return {
        ...state,
        wishlist: state.wishlist.map((i: any) =>
          i._id === isItemExist._id ? item : i
        ),
      };
    } else {
      return {
        ...state,
        wishlist: [...state.wishlist, item],
      };
    }
  },

  removeFromWishlist: (state: any, action: any) => {
    return {
      ...state,
      wishlist: state.wishlist.filter((i: any) => i._id !== action.payload),
    };
  },
});
