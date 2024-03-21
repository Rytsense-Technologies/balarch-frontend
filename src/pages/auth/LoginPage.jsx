import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkFormValidity();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const navigate = useNavigate();

  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  };

  const handleLogin = async () => {
    if (!isFormValid) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/signup/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.body.value.accessToken;
        localStorage.setItem("accessToken", accessToken);

        const decodedToken = parseJwt(accessToken);

        localStorage.setItem("userData", JSON.stringify(decodedToken));

        navigate("/");
        toast.success("Login successful");
      } else {
        const errorData = await response.json();
        if (response.status === 500) {
          throw new Error("Internal server error");
        } else if (response.status === 400) {
          throw new Error("Bad Request");
        } else {
          throw new Error(errorData.message || "An error occurred");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="relative p-5 min-h-screen">
      <img
        className="absolute top-0 right-0 w-1/2 h-1/2 object-cover"
        src="https://architectureprizecom.s3-us-west-2.amazonaws.com/uploads/93834/22-14328-23/medium/972da2f75baabc2cc1b31cc99b4cbc89.jpg"
        alt=""
      />
      <img
        className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover"
        src="https://i.insider.com/5d3228152516e93f46389b5f?width=700"
        alt=""
      />
      <section className="relative pt-2 px-4 lg:px-6 pb-20 md:pb-20 overflow-hidden">
        <div className="relative max-w-10xl pt-5 sm:pt-28 mx-auto">
          <div className="relative container px-4 mx-auto">
            <div className="max-w-lg md:max-w-xl py-10 px-6 xs:px-12 lg:px-16 mx-auto bg-white rounded-4xl shadow-lg">
              <div className="flex flex-col items-center justify-center">
                <NavLink to="/">
                  <img src={logo} className="w-40 mb-5" alt="Logo" />
                </NavLink>

                <p className="text-lg text-gray-500 mb-10">
                  Greetings on your return! We kindly request you to enter your
                  details.
                </p>
              </div>

              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor=""
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                    <img
                      src="saturn-assets/images/sign-up/icon-eye.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="float-right text-sm mb-2 underline text-blue-800">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
              <button
                className={`relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-gray-800 ${
                  isFormValid
                    ? "hover:bg-blue-gray-900"
                    : "cursor-not-allowed opacity-50"
                } rounded-full overflow-hidden`}
                type="submit"
                disabled={!isFormValid}
                onClick={handleLogin}
              >
                <span className="relative">Log In</span>
              </button>
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-900">
                  <span>Dont have an account?</span>
                  <Link
                    className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700"
                    to="/register"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
