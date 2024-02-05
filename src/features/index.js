import axios from "axios";
import { BASE_URL } from "../utils";

export const login = async (data) => {
  try {
    const userLogin = await axios.post(`${BASE_URL}/user/login`, data);

  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    // throw new Error(error);
  }
};

export const register = async (data) => {
  try {
    const createUser = await axios.post(`${BASE_URL}/user/register`, data);
    console.log(createUser);
    return createUser;
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    // throw new Error(error);
  }
};

