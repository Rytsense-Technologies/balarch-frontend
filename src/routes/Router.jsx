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
import ForgotPassword from "../pages/auth/ForgotPassword";
import LoginPage from "../pages/auth/LoginPage";
import NewPassword from "../pages/auth/NewPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import RegisterPage from "../pages/auth/RegisterPage";
import AllProjectList from "../pages/dashboard/admin-dashboard/AllProjectList";
import AllSubmissions from "../pages/dashboard/admin-dashboard/AllSubmissions";
import AllTags from "../pages/dashboard/admin-dashboard/AllTags";
import AllUserList from "../pages/dashboard/admin-dashboard/AllUserList";
import ScamReport from "../pages/dashboard/admin-dashboard/ScamReport";
import AddNewProduct from "../pages/dashboard/user-dashboard/AddNewProduct";
import AddNewProject from "../pages/dashboard/user-dashboard/AddNewProject";
import UserCollaborators from "../pages/dashboard/user-dashboard/UserCollaborators";
import UserMembership from "../pages/dashboard/user-dashboard/UserMembership";
import UserProfilePage from "../pages/dashboard/user-dashboard/UserProfilePage";
import UserProjectsList from "../pages/dashboard/user-dashboard/UserProjectsList";
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
        path="/product/:productId"
        element={
          <Layout>
            <ProductDetailPage />
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
        path="/scam-report"
        element={
          <DashboardLayout>
            <ScamReport />
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
        path="/scam-report"
        element={
          <DashboardLayout>
            <ScamReport />
          </DashboardLayout>
        }
      />

      <Route
        path="/tags"
        element={
          <DashboardLayout>
            <AllTags />
          </DashboardLayout>
        }
      />

      {/* user dashboard routes*/}

      <Route
        path="/user-profile"
        element={
          <DashboardLayout>
            <UserProfilePage />
          </DashboardLayout>
        }
      />
      <Route
        path="/user-projects"
        element={
          <DashboardLayout>
            <UserProjectsList />
          </DashboardLayout>
        }
      />

      <Route
        path="/user-collaborators"
        element={
          <DashboardLayout>
            <UserCollaborators />
          </DashboardLayout>
        }
      />

      <Route
        path="/user-membership"
        element={
          <DashboardLayout>
            <UserMembership />
          </DashboardLayout>
        }
      />

      <Route
        path="/add-new-project"
        element={
          <DashboardLayout>
            <AddNewProject />
          </DashboardLayout>
        }
      />

      <Route
        path="/add-new-product"
        element={
          <DashboardLayout>
            <AddNewProduct />
          </DashboardLayout>
        }
      />
    </Routes>
  );
};

export default Router;
