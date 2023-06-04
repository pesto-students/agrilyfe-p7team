import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct: any = (newForm: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error: any) {
    dispatch({
      type: "productCreateFail",
      payload: error.message,
    });
  }
};

// get All Products of a shop
export const getAllProductsShop: any = (id: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.message,
    });
  }
};

// delete product of a shop
export const deleteProduct: any = (id: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error: any) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.message,
    });
  }
};

// get all products
export const getAllProducts: any = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error: any) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.message,
    });
  }
};
