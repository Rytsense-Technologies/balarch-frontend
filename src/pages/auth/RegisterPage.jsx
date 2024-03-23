import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import ContactInfo from "../../components/auth/register/ContactInfo";
import EducationInfo from "../../components/auth/register/EducationInfo";
import OtherInfo from "../../components/auth/register/OtherInfo";
import PersonalInfo from "../../components/auth/register/PersonalInfo";
import ProfessionalInfo from "../../components/auth/register/ProfessionalInfo";

const RegisterPage = () => {
  const initialValues = {
    Email: "",
    Password: "",
    Name: "",
    ShortBio: "",
    Profession: "",
    ProfessionPositionName: "",
    EducationalInstitute1: "",
    EducationTitle1: "",
    EducationDegree1: "",
    EducationYear1: 0,
    EducationalInstitute2: "",
    EducationTitle2: "",
    EducationDegree2: "",
    EducationYear2: 0,
    EducationalInstitute3: "",
    EducationTitle3: "",
    EducationDegree3: "",
    EducationYear3: 0,
    CompanyProfessionalExperience1: "",
    PositionProfessionalExperience1: "",
    YearProfessionalExperience1: 0,
    CompanyProfessionalExperience2: "",
    PositionProfessionalExperience2: "",
    YearProfessionalExperience2: 0,
    CompanyProfessionalExperience3: "",
    PositionProfessionalExperience3: "",
    YearProfessionalExperience3: 0,
    StartYear: 0,
    WebsiteLink: "",
    ContactEmailAddress: "",
    ContactPhoneNumber: 0,
    ProfilePicture: "",
    Country: "",
    MagazineShippingAddress: "",
    OperationRange: "",
    FacebookIconLink: "",
    InstagramIconLink: "",
    IssueIconLink: "",
    XIconLink: "",
    YoutubeIconLink: "",
    YearExperience: 0,
    IconsOfProfessionalSoftwares: "",
    Occupation: "",
    Concentration: "",
    Industry: "",
  };

  const validationSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    Password: Yup.string().required("Password is required"),
    Name: Yup.string().required("Name is required"),
    ShortBio: Yup.string().required("Bio is required"),
    Profession: Yup.string().required("Profession is required"),
    ProfessionPositionName: Yup.string().required("Position name required"),
    Occupation: Yup.string().required("Occupation is required"),
    Concentration: Yup.string().required("Concentration is required"),
    EducationalInstitute1: Yup.string().required("Institute is required"),
    EducationTitle1: Yup.string().required("Career title is required"),
    EducationDegree1: Yup.string().required("Degree is required"),
    EducationYear1: Yup.number().required("Year is required"),
    CompanyProfessionalExperience1: Yup.string().required(
      "Company is required"
    ),
    PositionProfessionalExperience1: Yup.string().required(
      "Position is required"
    ),
    YearProfessionalExperience1: Yup.number().required("Year is required"),
    Industry: Yup.string().required("Industry is required"),
    StartYear: Yup.number().required("Industry start year is required"),
    ContactEmailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    ContactPhoneNumber: Yup.number().required("Contact phone is required"),
    ProfilePicture: Yup.string().required("Profile picture is required"),
    Country: Yup.string().required("Country is required"),
    MagazineShippingAddress: Yup.string().required("Magazine address required"),
    YearExperience: Yup.number().required("Year of experience is required"),
  });

  const [openTab, setOpenTab] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/signup/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        navigate("/login");
        toast.success("Account created successfully");
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
      console.error("Submission error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    setOpenTab(openTab + 1);
  };

  const handlePrevious = () => {
    setOpenTab(openTab - 1);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://www.indian-architects.com/images/Projects/88/59/40/bd48c6e62dca4a79acde62069f5966ad/bd48c6e62dca4a79acde62069f5966ad.6e7b65d0.jpg')",
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-4 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-10 tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Get your account now.
              </h1>

              <div>
                <div>
                  <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                    {[1, 2, 3, 4, 5].map((tabIndex) => (
                      <button
                        key={tabIndex}
                        onClick={() => setOpenTab(tabIndex)}
                        className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                          openTab === tabIndex ? "bg-gray-800 text-white" : ""
                        }`}
                      >
                        {tabIndex === 1 && "Personal"}
                        {tabIndex === 2 && "Education"}
                        {tabIndex === 3 && "Profession"}
                        {tabIndex === 4 && "Contact"}
                        {tabIndex === 5 && "Other"}
                      </button>
                    ))}
                  </div>

                  <div className="transition-all duration-300 bg-white">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          {/* Form fields for each tab */}
                          {openTab === 1 && (
                            <PersonalInfo
                              handleNext={handleNext}
                              isSubmitting={isSubmitting}
                            />
                          )}
                          {openTab === 2 && (
                            <EducationInfo
                              handleNext={handleNext}
                              handlePrevious={handlePrevious}
                            />
                          )}
                          {openTab === 3 && (
                            <ProfessionalInfo
                              handleNext={handleNext}
                              handlePrevious={handlePrevious}
                            />
                          )}
                          {openTab === 4 && (
                            <ContactInfo
                              handleNext={handleNext}
                              handlePrevious={handlePrevious}
                            />
                          )}
                          {openTab === 5 && (
                            <OtherInfo
                              handlePrevious={handlePrevious}
                              isSubmitting={isSubmitting}
                            />
                          )}

                          <div className="text-center mt-10">
                            <span className="text-xs font-semibold text-gray-900">
                              <span>Already have an account?</span>
                              <Link
                                to="/login"
                                className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700"
                              >
                                Login
                              </Link>
                            </span>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
