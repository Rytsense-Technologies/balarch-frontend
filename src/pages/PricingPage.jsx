import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from "../components/_app/Footer";
const PricingPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const pricing = [
    {
      plan: "Bronze",
      monthprice: "$0",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },
    {
      plan: "Copper",
      monthprice: "$10",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },

    {
      plan: "Silver",
      monthprice: "$50",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },
    {
      plan: "Gold",
      monthprice: "$100",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },
    {
      plan: "Platinium",
      monthprice: "$150",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },
    {
      plan: "Titanium",
      monthprice: "$200",
      annualprice: "$0",
      facilities: [
        { project: 1 },
        { collaboration: 1 },
        { build: "yes" },
        { unbuild: "yes" },
      ],
    },
  ];
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-4 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Pricing Plans
            </h2>
          </div>

          <Slider {...settings}>
            {pricing.map((plan, i) => (
              <div
                key={i}
                className="flex flex-col p-6 gap-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 border-gray-200 shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h3 className="mb-4 text-2xl font-semibold">{plan.plan}</h3>

                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    {plan.monthprice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Project Creation: <span className="font-semibold">1</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Project collaboration Request:{" "}
                      <span className="font-semibold">Yes</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Unbuild Competition Participation:{" "}
                      <span className="font-semibold">Yes</span>
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Build Competition Participation:{" "}
                      <span className="font-semibold">Yes</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PricingPage;
