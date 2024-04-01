import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import { otpVerifyHandler } from "../../service/AuthService";

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("forgotPasswordEmail");

  const handleOtpVerify = async () => {
    const otpNumber = parseInt(otp.join(""), 10);
    if (!otpNumber) {
      toast.error("Please enter your OTP");
      return;
    }
    setIsLoading(true);
    try {
      const data = await otpVerifyHandler({ email, otp: otpNumber });
      navigate("/reset-password");
      toast.success("Otp Verified Successfully");
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
                  Please enter your email address to get a verification code.
                </p>
              </div>

              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-16 h-16 ">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={otp[index - 1] || ""}
                        onChange={(e) => {
                          const updatedOtp = [...otp];
                          updatedOtp[index - 1] = e.target.value;
                          setOtp(updatedOtp);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="relative group block w-full mt-5 mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-gray-800 hover:bg-blue-gray-900 rounded-full overflow-hidden"
                type="submit"
                onClick={handleOtpVerify}
              >
                <span className="relative">
                  {" "}
                  {isLoading ? "Verifying..." : "Verify"}
                </span>
              </button>
              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p>{" "}
                <a
                  className="flex flex-row items-center text-blue-600"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtpVerify;
