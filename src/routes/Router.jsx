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
import UploadNewProject from "../pages/UploadNewProject";
import ForgotPassword from "../pages/auth/ForgotPassword";
import LoginPage from "../pages/auth/LoginPage";
import NewPassword from "../pages/auth/NewPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import RegisterPage from "../pages/auth/RegisterPage";
import AddProjectPage from "../pages/dashboard/projects/AddProjectPage";
import AllProjectList from "../pages/dashboard/projects/AllProjectList";
import AllSubmissions from "../pages/dashboard/submission/AllSubmissions";
import UserProfilePage from "../pages/dashboard/user-dashboard/UserProfilePage";
import AllUserList from "../pages/dashboard/user/AllUserList";
import ProductDetailPage from "./../pages/ProductDetailPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verify" element={<OtpVerify />} />
      <Route path="/reset-password" element={<NewPassword />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/professionals"
        element={
          <Layout>
            <Professionals />
          </Layout>
        }
      />
      <Route
        path="/products"
        element={
          <Layout>
            <Productos />
          </Layout>
        }
      />
      <Route
        path="/project/:projectId"
        element={
          <Layout>
            <ProjectDetailPage />
          </Layout>
        }
      />
      <Route
        path="/professionals/:UserId"
        element={
          <Layout>
            <ProfessionalDetailPage />
          </Layout>
        }
      />
      <Route
        path="/product/:ProductId"
        element={
          <Layout>
            <ProductDetailPage />
          </Layout>
        }
      />

      <Route
        path="/upload-project"
        element={
          <Layout>
            <UploadNewProject />
          </Layout>
        }
      />

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

      <Route
        path="/user-profile"
        element={
          <DashboardLayout>
            <UserProfilePage />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default Router;
