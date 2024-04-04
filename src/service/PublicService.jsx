import axios from "axios";

const BASE_URL = "http://54.167.20.39:8080/";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/products/getAllProducts`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};
