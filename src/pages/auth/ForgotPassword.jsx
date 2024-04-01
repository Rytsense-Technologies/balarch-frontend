import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import { forgotPasswordHandler } from "../../service/AuthService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    Email: "",
  };

  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleForgotPassword = async (values) => {
    setIsLoading(true);
    try {
      localStorage.setItem("forgotPasswordEmail", values.Email);
      const data = await forgotPasswordHandler(values);

      navigate("/otp-verify");
      toast.success("Please check your email for verification code");
    } catch (error) {
      setError(error.message || "Something went wrong");
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
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

                  <p className="text-lg text-center text-gray-500 mb-10">
                    Please enter your email address to get a verification code.
                  </p>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleForgotPassword}
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
                          name="Email"
                          type="email"
                          placeholder="john@gmail.com"
                          className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        />
                        <ErrorMessage
                          name="Email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
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
                          {isLoading ? "Sending..." : "Get Verification code"}
                        </span>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
