const BASE_URL = import.meta.env.VITE_APP_BASE_BACKEND_API_URL;

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/products/getAllProducts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};
