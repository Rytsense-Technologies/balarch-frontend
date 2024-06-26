import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import { loginUser } from "../../service/AuthService";

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const data = await loginUser(values);
      const accessToken = data.body.value.accessToken;
      const role = data.body.value.role;
      const email = data.body.value.email;
      const profilePicture = data.body.value.profilePicture;
      localStorage.setItem("profilePicture", profilePicture);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      if (role === "SUPER_ADMIN") {
        navigate("/all-users");
      } else {
        navigate("/");
      }
      toast.success("Login successful");
    } catch (error) {
      setError(error.message || "Something went wrong");
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
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

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                  password: Yup.string().required("Password is required"),
                })}
                onSubmit={handleLogin}
              >
                {(formik) => (
                  <Form>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-sm text-gray-900 font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="john@gmail.com"
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-sm text-gray-900 font-semibold"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="********"
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div className="float-right text-sm mb-2 underline text-blue-800">
                      <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                    <button
                      className={`relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-gray-800 ${
                        formik.isValid
                          ? "hover:bg-blue-gray-900"
                          : "cursor-not-allowed opacity-50"
                      } rounded-full overflow-hidden`}
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      <span className="relative">
                        {" "}
                        {isLoading ? "Logging in..." : "Log In"}
                      </span>
                    </button>
                    <div className="text-center">
                      <span className="text-xs font-semibold text-gray-900">
                        <span>Dont have an account?</span>
                        <Link
                          className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700"
                          to="/pricing"
                        >
                          Sign In
                        </Link>
                      </span>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
