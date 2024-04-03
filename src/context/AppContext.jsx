import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [profileType, setProfileType] = useState("");
  const [open, setOpen] = useState(true);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const isLoggedIn = !!accessToken;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <AppContext.Provider
      value={{
        profileType,
        setProfileType,
        isLoggedIn,
        login,
        logout,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
