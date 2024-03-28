import {
  Button,
  ButtonGroup,
  Option,
  Radio,
  Select,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import Footer from "../components/_app/Footer";
import { useAppContext } from "../context/AppContext";
import { YearlyPlan } from "../mock/PricingData";

const PricingPage = () => {
  const [membershipType, setMembershipType] = useState("Yearly");
  const [selectedProfileType, setSelectedProfileType] = useState(null);
  const navigate = useNavigate();
  const { profileType, setProfileType } = useAppContext();

  const handleProfileType = () => {
    if (!profileType) {
      toast.warn("Please select Profile type");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <div className="px-10 py-10">
        <div className="bg-gray-100 px-10 min-h-screen rounded-lg">
          <div className="py-10 flex flex-col items-center gap-4 justify-center">
            <img src={logo} className="w-40" />
            <h1 className="text-xl font-semibold">Select Your Occupation</h1>
            <ButtonGroup className="gap-4 p-2">
              <Button
                className={`rounded-none ${
                  selectedProfileType === "Professional"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                variant="outlined"
                onClick={() => {
                  setProfileType("Professional");
                  setSelectedProfileType("Professional");
                }}
              >
                Professional
              </Button>
              <Button
                className={`rounded-none ${
                  selectedProfileType === "Student"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setProfileType("Student");
                  setSelectedProfileType("Student");
                }}
              >
                Student
              </Button>
              <Button
                className={`rounded-none ${
                  selectedProfileType === "Professor"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setProfileType("Professor");
                  setSelectedProfileType("Professor");
                }}
              >
                Professor
              </Button>
              <Button
                className={`rounded-none ${
                  selectedProfileType === "Company"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setProfileType("Company");
                  setSelectedProfileType("Company");
                }}
              >
                Company
              </Button>
              <Button
                className={`rounded-none ${
                  selectedProfileType === "Product"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setProfileType("Product");
                  setSelectedProfileType("Product");
                }}
              >
                Product
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center">
              Select Your Membership
            </h1>
            <div className="flex gap-10 mt-5">
              <Radio
                name="type"
                label="Yearly"
                checked={membershipType === "Yearly"}
                onChange={() => setMembershipType("Yearly")}
              />
              <Radio
                name="type"
                label="Monthly"
                checked={membershipType === "Monthly"}
                onChange={() => setMembershipType("Monthly")}
              />
              <div className="w-24">
                <Select label="$ USD" className="bg-white">
                  <Option>Rs</Option>
                </Select>
              </div>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 py-5 lg:space-y-0">
              {YearlyPlan.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="mb-4 text-2xl font-semibold flex items-center gap-2 justify-center">
                    <img src={plan.icon} alt={plan.plan} /> {plan.plan}
                  </h3>
                  <p className="font-semibold text-gray-800 sm:text-lg dark:text-gray-400">
                    $
                    {membershipType === "Yearly"
                      ? plan.yearprice
                      : plan.monthprice}{" "}
                    per {membershipType}
                  </p>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Billed {membershipType}
                  </p>
                  <Button color="blue" className="mt-5">
                    Try Now
                  </Button>
                  <ul role="list" className="mb-8 space-y-4 text-left mt-5">
                    {membershipType === "Yearly"
                      ? plan.yearfacilities.map((facility, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>{facility}</span>
                          </li>
                        ))
                      : plan.monthfacilities.map((facility, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>{facility}</span>
                          </li>
                        ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between px-4">
            <div></div>
            <Button
              variant="gradient"
              className="mt-10 mb-10 flex items-center gap-2"
              onClick={handleProfileType}
            >
              Next <GrFormNextLink />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
