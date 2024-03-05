import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/_app/Layout";
import Home from "../pages/Home";
import Professionals from "../pages/Professionals";
import Projects from "../pages/Projects";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/proyectoss"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/profesionaless"
        element={
          <Layout>
            <Professionals />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
