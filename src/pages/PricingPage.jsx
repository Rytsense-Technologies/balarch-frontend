import { Button, ButtonGroup } from "@material-tailwind/react";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import Footer from "../components/_app/Footer";
import PricingPlan from "../components/pricing/PricingPlan";
import { useAppContext } from "../context/AppContext";

const PricingPage = () => {
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

          <PricingPlan />

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
