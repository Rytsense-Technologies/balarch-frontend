import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status here, for example, by verifying a token.
    const token = localStorage.getItem("accessToken"); // Assuming you store the token in localStorage
    if (token) {
      // Token exists, user is authenticated
      setIsAuthenticated(true);
    } else {
      // Token doesn't exist, user is not authenticated
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
