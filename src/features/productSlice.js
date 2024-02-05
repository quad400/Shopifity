import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils";
import { message } from "antd";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (page) => {
    try {
      const getAllProduct = await axios.get(
        `${BASE_URL}/product/?page=${page}`,
        null
      );
      return getAllProduct.data;
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    cart: null,
    wishlist: [],
  },
  reducers: {
    productList: (state, action) => {
      state.products = action.payload;
    },
    product: (state, action) => {
      state.product = action.payload;
    },
    cart: (state, action) => {
      state.cart = action.payload;
    },
    wishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export default productSlice.reducer;

export const ProductList = (page) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/product/?page=${page}`);
      dispatch(productSlice.actions.productList(data?.products));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const GetProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      console.log(id);
      const { data } = await axios.get(`${BASE_URL}/product/${id}`);
      console.log(data);

      dispatch(productSlice.actions.product(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const AddtoCart = (body) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart/add`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success({
        content: "Product Successfully Added to cart",
      });
      return response;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Some error occur",
      });
    }
  };
};

export const DeductFromCart = (body) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart/remove`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success({
        content: "Successfully deduct product from cart",
      });
      return response;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Some error occur",
      });
    }
  };
};

export const GetCart = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(productSlice.actions.cart(response.data));
      return response;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Error fetching cart",
      });
    }
  };
};

export const GetWishlist = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/wishlist`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(productSlice.actions.wishlist(response.data?.wishlist));
      return response;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Error fetching wishlist",
      });
    }
  };
};

export const AddtoWishlist = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.put(
        `${BASE_URL}/user/wishlist/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success({
        content: "Product successfully added to wishlist",
      });
      dispatch(productSlice.actions.wishlist(response?.data?.data?.wishlist));
      return response.data;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Error adding to wishlist",
      });
    }
  };
};

export const RemoveFromWishlist = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await axios.put(
        `${BASE_URL}/user/wishlist/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      message.success({
        content: "Product successfully remove from wishlist",
      });
      dispatch(productSlice.actions.wishlist(response?.data?.data?.wishlist));
      return response.data;
    } catch (error) {
      console.log(error.message);
      message.error({
        content: "Error adding to wishlist",
      });
    }
  };
};
