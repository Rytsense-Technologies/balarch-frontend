import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/_app/Layout";
import DashboardLayout from "../components/dashboard/_app/DashboardLayout";
import Home from "../pages/Home";
import PricingPage from "../pages/PricingPage";
import Productos from "../pages/Productos";
import ProfessionalDetailPage from "../pages/ProfessionalDetailPage";
import Professionals from "../pages/Professionals";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Projects from "../pages/Projects";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AddProjectPage from "../pages/dashboard/projects/AddProjectPage";
import AllProjectList from "../pages/dashboard/projects/AllProjectList";
import AllSubmissions from "../pages/dashboard/submission/AllSubmissions";
import AllUserList from "../pages/dashboard/user/AllUserList";
import ProductDetailPage from "./../pages/ProductDetailPage";

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
      <Route
        path="/productos"
        element={
          <Layout>
            <Productos />
          </Layout>
        }
      />
      <Route
        path="/proyectoss/name"
        element={
          <Layout>
            <ProjectDetailPage />
          </Layout>
        }
      />
      <Route
        path="/profesionaless/name"
        element={
          <Layout>
            <ProfessionalDetailPage />
          </Layout>
        }
      />
      <Route
        path="/productos/name"
        element={
          <Layout>
            <ProductDetailPage />
          </Layout>
        }
      />
      <Route path="/pricing" element={<PricingPage />} />

      <Route
        path="/all-users"
        element={
          <DashboardLayout>
            <AllUserList />
          </DashboardLayout>
        }
      />
      <Route
        path="/all-projects"
        element={
          <DashboardLayout>
            <AllProjectList />
          </DashboardLayout>
        }
      />
      <Route
        path="/all-submissions"
        element={
          <DashboardLayout>
            <AllSubmissions />
          </DashboardLayout>
        }
      />
      <Route
        path="/add-project"
        element={
          <DashboardLayout>
            <AddProjectPage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default Router;
