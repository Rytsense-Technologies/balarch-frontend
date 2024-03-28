import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const token = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePopover = () => {
    setPopoverOpen(!isPopoverOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div>
        {/* Desktop Navbar */}
        <div className="flex h-20 items-center gap-6 justify-end bg-gray-900 px-4 p-2 text-sm font-normal text-gray-200 sm:px-6 lg:px-40">
          <div className="flex items-center gap-6 mt-5 mb-5">
            <button
              className="select-none rounded-lg border border-gray-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Book
            </button>
            <button
              className="select-none rounded-lg border border-gray-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              View Magazine
            </button>

            {token ? (
              <>
                <button
                  className="select-none rounded-lg border border-gray-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Dashboard
                </button>
                <div className="flex items-center gap-2" onClick={handleLogout}>
                  <img
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                  />

                  <p>Hi, User</p>
                </div>
              </>
            ) : (
              <button
                className="select-none rounded-lg border border-gray-100 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden  px-4 py-2 flex justify-between items-center">
          <Link to="/">
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
                to="/all-users"
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

          <Link to="/">
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
            to="/all-users"
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
