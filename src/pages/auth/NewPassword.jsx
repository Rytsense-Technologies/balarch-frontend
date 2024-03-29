import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";

const NewPassword = () => {
  const [newpassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const userDataString = localStorage.getItem("userData");

  const userData = JSON.parse(userDataString);

  const email = userData.email;

  const handleNewPassword = async () => {
    if (!newpassword) {
      toast.error("Please enter new password");
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/signup/check-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, newpassword }),
        }
      );

      if (response.ok) {
        navigate("/login");
        toast.success("Password Reset Successfully");
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
    <>
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
                    Please enter your email address to get a verification code.
                  </p>
                </div>

                <div className="mb-6">
                  <label
                    className="block mb-1.5 text-sm text-gray-900 font-semibold"
                    htmlFor=""
                  >
                    New Password
                  </label>
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    type="password"
                    placeholder="******"
                    value={newpassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>

                <button
                  className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-gray-800 hover:bg-blue-gray-900 rounded-full overflow-hidden"
                  type="submit"
                  onClick={handleNewPassword}
                >
                  <span className="relative">Reset Password</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewPassword;
