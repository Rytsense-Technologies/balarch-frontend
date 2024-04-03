import React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/icons/User.png";
import collab from "../../../assets/images/icons/collab.png";
import mag from "../../../assets/images/icons/mag.png";
import project from "../../../assets/images/icons/project.png";
import scam from "../../../assets/images/icons/scam.png";
import submission from "../../../assets/images/icons/submission.png";
import tag from "../../../assets/images/icons/tag.png";
import upgrade from "../../../assets/images/icons/upgrade.png";
import logo from "../../../assets/images/logo.png";
import Footer from "../../_app/Footer";

export default function DashboardLayout({ children }) {
  const role = localStorage.getItem("role");
  const userMenus = [
    {
      title: "Profile",
      icon: user,
      href: "/user-profile",
    },
    {
      title: "Projects",
      icon: project,
      href: "/user-projects",
    },
    {
      title: "Product",
      icon: project,
      href: "/add-new-product",
    },
    {
      title: "Collaborators",
      icon: collab,
      href: "/user-collaborators",
    },
    {
      title: "Upgrade Membership",
      icon: upgrade,
      href: "/user-membership",
    },
  ];

  const adminMenus = [
    {
      title: "Users",
      icon: user,
      href: "/all-users",
    },
    {
      title: "Project",
      icon: project,
      href: "/all-projects",
    },
    {
      title: "Tags",
      icon: tag,
      href: "/tags",
    },
    {
      title: "Submissions",
      icon: submission,
      href: "/all-submissions",
    },
    {
      title: "Scam Reports",
      icon: scam,
      href: "/scam-report",
    },
    {
      title: "Magazines",
      icon: mag,
    },
  ];

  const menusToShow = role === "SUPER_ADMIN" ? [...adminMenus] : userMenus;

  return (
    <>
      <div className="min-h-full flex p-6">
        <aside className="w-64 ">
          <div className="h-full flex flex-col justify-between py-6 px-4">
            <div className="space-y-4">
              <Link to="/">
                <img className="w-32" src={logo} alt="Logo" />
              </Link>
              {menusToShow.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.href}
                  className="block py-2 px-4 hover:bg-blue-400 rounded"
                >
                  <div className=" flex items-center gap-4">
                    <img src={menu.icon} alt={menu.title} />
                    {menu.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <main>
            <div className="mx-auto min-h-screen max-w-7xl py-6 sm:px-6 lg:px-8 bg-gray-200 rounded-xl">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
