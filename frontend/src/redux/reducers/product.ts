import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state: any) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state: any, action: any) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state: any, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state: any, action: any) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopFailed: (state: any, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state: any, action: any) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state: any, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state: any, action: any) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state: any, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  clearErrors: (state: any) => {
    state.error = null;
  },
});
