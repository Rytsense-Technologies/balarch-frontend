import { Link } from "react-router-dom";

const LoginPage = () => {
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
              <h1 className="text-center text-3xl font-semibold mb-4">
                Balarch
              </h1>

              <p className="text-lg text-gray-500 mb-10">
                Greetings on your return! We kindly request you to enter your
                details.
              </p>
              <form>
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
                    placeholder="pat@saturn.dev"
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
                      placeholder="min 12 cars"
                    />
                    <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                      <img
                        src="saturn-assets/images/sign-up/icon-eye.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="flex mb-6 items-center">
                  <input type="checkbox" value="" id="" />
                  <label className="ml-2 text-xs text-gray-800" htmlFor="">
                    Remember me
                  </label>
                </div>
                <button
                  className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-sky-500 rounded-full overflow-hidden"
                  type="submit"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Sign In</span>
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
