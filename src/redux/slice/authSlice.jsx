import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk("registerUser", async (body) => {
  try {
    const res = await fetch("http://54.167.20.39:8080/api/signup/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
});

export const loginUser = createAsyncThunk("loginUser", async (body) => {
  try {
    const res = await fetch("http://54.167.20.39:8080/api/signup/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
});

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (body) => {
    try {
      const res = await fetch(
        "http://54.167.20.39:8080/api/signup/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      return await res.json();
    } catch (error) {
      return { error: error.message };
    }
  }
);
export const otpVerification = createAsyncThunk(
  "otpVerification",
  async (body) => {
    try {
      const res = await fetch(
        "http://54.167.20.39:8080/api/signup/check-otp ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      return await res.json();
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const ResetNewPassword = createAsyncThunk(
  "newPassword",
  async (body) => {
    try {
      const res = await fetch(
        "http://54.167.20.39:8080/api/signup/new-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      return await res.json();
    } catch (error) {
      return { error: error.message };
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logOut: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
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
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, { payload: { error, msg, token, user } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            state.token = token;
            state.user = user;
          }
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occurred while login.";
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        forgotPassword.fulfilled,
        (state, { payload: { error, msg } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            state.msg = msg;
          }
        }
      )
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occurred while get otp.";
      })
      .addCase(otpVerification.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        otpVerification.fulfilled,
        (state, { payload: { error, msg } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            state.msg = msg;
          }
        }
      )
      .addCase(otpVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occurred while otp verification.";
      })
      .addCase(ResetNewPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        ResetNewPassword.fulfilled,
        (state, { payload: { error, msg } }) => {
          state.loading = false;
          if (error) {
            state.error = error;
          } else {
            state.msg = msg;
          }
        }
      )
      .addCase(ResetNewPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occurred while reset password";
      });
  },
});

export const { logout, addToken, addUser } = authSlice.actions;
export default authSlice.reducer;
