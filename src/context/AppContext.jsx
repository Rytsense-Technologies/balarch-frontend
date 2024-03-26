import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [profileType, setProfileType] = useState("");

  return (
    <AppContext.Provider value={{ profileType, setProfileType }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
