import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
  const profilePicture = localStorage.getItem("profilePicture");
  const navigate = useNavigate();
  const popoverRef = useRef(null);
  const noimg =
    "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="flex sticky h-16 items-center gap-6 justify-end bg-gray-900 px-4 p-2 text-sm font-normal text-gray-200 sm:px-6 lg:px-20">
          <div className="flex items-center gap-6 mt-5 mb-5">
            <button
              type="button"
              className="px-3 py-2 me-2  text-sm font-medium text-white focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View Book
            </button>
            <button
              type="button"
              className="px-3 py-2 me-2  text-sm font-medium text-white focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View Magazine
            </button>

            {token ? (
              <>
                <div className="flex items-center gap-2 relative">
                  <button
                    className="rounded-full  py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={togglePopover}
                    ref={popoverRef}
                  >
                    <img
                      src={profilePicture || noimg}
                      alt="avatar"
                      className="relative inline-block h-10 w-10 !rounded-full  object-cover object-center"
                    />
                  </button>
                  {isPopoverOpen && (
                    <div
                      className="absolute right-0 mt-40 p-2 bg-white border border-gray-200 shadow-lg rounded-md text-gray-900"
                      ref={popoverRef}
                    >
                      <p className="p-2 font-semibold text-gray-500">
                        Hi, {email}
                      </p>
                      <button
                        className="block w-full p-2 text-left font-semibold hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                type="button"
                className="px-3 py-2 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-800 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => navigate("/login")}
              >
                Log In
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
                to="/projects"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PROJECTS
              </NavLink>
              <NavLink
                to="/professionals"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PROFESSIONALS
              </NavLink>
              <NavLink
                to="/products"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/all-users"
                className="text-gray-200 text-xl py-2"
                onClick={toggleMobileMenu}
              >
                PUBLISH
              </NavLink>
            </div>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="py-5 flex items-center justify-center text-gray-900 font-bold gap-24 hidden sm:flex">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/professionals"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PROFESSIONALS
          </NavLink>

          <Link to="/">
            <img
              src="https://stage-dihomx.com/wp-content/uploads/2023/09/logo.png"
              className="w-40"
              alt="logo-balarch"
            />
          </Link>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PRODUCTS
          </NavLink>
          {token ? (
            <NavLink
              to="/user-profile"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8"
                  : "hover:underline hover:underline-offset-8"
              }
            >
              PUBLISH
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-8"
                  : "hover:underline hover:underline-offset-8"
              }
            >
              PUBLISH
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};
