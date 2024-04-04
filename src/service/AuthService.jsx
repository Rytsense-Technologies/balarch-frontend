import axios from "axios";

const BASE_URL = "http://54.167.20.39:8080/";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${BASE_URL}api/signup/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}api/signup/create`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const forgotPasswordHandler = async (value) => {
  try {
    const response = await axios.post(`${BASE_URL}api/signup/create`, value, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const otpVerifyHandler = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}api/signup/create`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export const newPasswordHandler = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}api/signup/create`, values, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
