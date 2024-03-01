import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex h-10 items-center justify-end gap-4 bg-gray-900 px-4 text-sm font-normal text-gray-200 sm:px-6 lg:px-40">
          <p>Revisto Impresa</p>
          <p>ESP / ING</p>
          <div className="flex items-center gap-2 font-medium">
            <p>Ingresar</p>
            <FaUserCircle className="text-lg" />
          </div>
        </div>
        <div className="py-5 flex items-center justify-center text-gray-900 font-bold gap-12">
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
            to="/proyectoss"
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
            to="/proyectoss"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8"
                : "hover:underline hover:underline-offset-8"
            }
          >
            PRODUCTOS
          </NavLink>
          <NavLink
            to="/proyectoss"
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
