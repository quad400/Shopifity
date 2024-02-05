import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const getUser = await axios.get(`${BASE_URL}/user`, config);
    return getUser.data;
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle", // loading, succeeded, failed
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
        state.isAuthenticated = true;
      })
      .addCase(fetchUser.rejected, (state, error) => {
        state.isAuthenticated = false;
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;

export const LoginUser = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, body);
    localStorage.setItem("token", response.data?.token);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const ForgotPasswordRequest = async (data) => {
  try {
console.log(data)
    const fog = await axios.get(`${BASE_URL}/user/forgot-password`, data);
    console.log(fog)
    return fog;
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
};
