import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="lg:px-40 py-20">
        <div className="flex justify-center items-center gap-4 text-white text-xl font-bold">
          <span className="flex items-center gap-4 border-2 border-white p-2">
            Publish your Project <FaArrowRightLong />
          </span>
        </div>
        <footer className="text-white body-font">
          <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <img src="https://stage-dihomx.com/wp-content/uploads/2023/10/Balarch-8-bco-1.png" />
              </a>
              <p className="mt-2 text-sm text-white">
                Lorem ipsum there is no one who loves pain itself, who seeks
                after it and wants to have it, simply because it is pain.
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/3 md:w-1/2 w-full text-white px-4">
                <h2 className="text-xl font-semibold tracking-widest mb-3">
                  Explore
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Projects</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Professionals</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Products</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full text-white px-4">
                <h2 className="text-xl font-semibold tracking-widest mb-3">
                  Explore
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Projects</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Professionals</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Products</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full text-white px-4">
                <h2 className="text-xl font-semibold tracking-widest mb-3">
                  Explore
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Projects</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Professionals</a>
                  </li>
                  <li className="mb-5">
                    <a className="hover:text-gray-800">Products</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © Balarch, Inc. 2023. | email@balarch.com | Powered by diho.mx
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-900 rounded-full bg-gray-300 p-2">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-900 rounded-full bg-gray-300 p-2">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-900 rounded-full bg-gray-300 p-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
