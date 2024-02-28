import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
