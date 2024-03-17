import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk("registerUser", async (body) => {
  const res = await fetch("http://54.167.20.39:8080/api/signup/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload: { error, msg } }) => {
        state.loading = false;
        if (error) {
          state.error = error;
        } else {
          state.msg = msg;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occurred while registering.";
      });
  },
});

export default authSlice.reducer;
