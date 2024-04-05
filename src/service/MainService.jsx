import axios from "axios";

const BASE_URL = "http://54.167.20.39:8080/";

export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/getAll`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};

export const getAllProfessionals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/signup/getAllUsers`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/products/getAllProducts`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};

export const getProjectById = async (projectId, token) => {
  try {
    const response = await fetch(`${BASE_URL}api/getByProjectId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ProjectId: projectId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    const data = await response.json();
    return data.Result;
  } catch (error) {
    throw new Error("Error fetching project details: " + error.message);
  }
};

export const getProfessionalById = async (userId, token) => {
  try {
    const response = await fetch(`${BASE_URL}api/signup/getByUserId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ UserId: userId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    const data = await response.json();
    return data.Result;
  } catch (error) {
    throw new Error("Error fetching project details: " + error.message);
  }
};

export const getProductById = async (productId, token) => {
  try {
    const response = await fetch(`${BASE_URL}api/products/getByProductId`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ProductId: productId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    const data = await response.json();
    return data.Result;
  } catch (error) {
    throw new Error("Error fetching project details: " + error.message);
  }
};

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/getAllCountries`);

    return response.data.Result;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
};
