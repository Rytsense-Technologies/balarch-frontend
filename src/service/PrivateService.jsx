import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_BACKEND_API_URL;

const token = localStorage.getItem("accessToken");

export async function getProductDetails(ProductId) {
  try {
    const response = await axios.post(
      `${BASE_URL}api/products/getByProductId`,
      { ProductId: ProductId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch project details");
  }
}
