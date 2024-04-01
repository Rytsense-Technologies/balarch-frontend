import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_BACKEND_API_URL;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/products/getAllProducts`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};
