import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div>
        {/* Desktop Navbar */}
        <div className="flex h-10 items-center gap-6 justify-end bg-gray-900 px-4 text-sm font-normal text-gray-200 sm:px-6 lg:px-40">
          <div className="flex items-center gap-2 font-medium">
            <p>Revisto Impresa</p>
            <p>ESP / ING</p>
          </div>
          <div
            className="flex items-center gap-2 font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <p>Ingresar</p>
            <FaUserCircle className="text-lg" />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden  px-4 py-2 flex justify-between items-center">
          <Link to="">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/logo.png"
              className="w-20"
              alt="logo-balarch"
            />
          </Link>
          <FaBars
            className="text-gray-800 text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu Popup */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50">
            <div className="flex flex-col items-center justify-center h-full">
              <NavLink
                to="/proyectoss"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PROYECTS
              </NavLink>
              <NavLink
                to="/profesionaless"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PROFESSIONALES
              </NavLink>
              <NavLink
                to="/productos"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PRODUCTOS
              </NavLink>
              <NavLink
                to="/publicar"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PUBLICAR
              </NavLink>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="py-5 flex items-center justify-center text-gray-900 font-bold gap-12 hidden sm:flex">
          <NavLink
            to="/proyectoss"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PROYECTS
          </NavLink>
          <NavLink
            to="/profesionaless"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PROFESSIONALES
          </NavLink>

          <Link to="">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/logo.png"
              className="w-40"
              alt="logo-balarch"
            />
          </Link>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PRODUCTOS
          </NavLink>
          <NavLink
            to="/publicar"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PUBLICAR
          </NavLink>
        </div>
      </div>
    </>
  );
};
