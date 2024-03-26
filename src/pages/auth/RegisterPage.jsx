import AWS from "aws-sdk";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import ContactInfo from "../../components/auth/register/ContactInfo";
import EducationInfo from "../../components/auth/register/EducationInfo";
import OtherInfo from "../../components/auth/register/OtherInfo";
import PersonalInfo from "../../components/auth/register/PersonalInfo";
import ProfessionalInfo from "../../components/auth/register/ProfessionalInfo";
import SoftwareExperience from "../../components/auth/register/SoftwareExperience";
import { useAppContext } from "../../context/AppContext";

const RegisterPage = () => {
  const [openTab, setOpenTab] = useState(1);
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || null
  );
  const navigate = useNavigate();
  const { profileType } = useAppContext();
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

    Country: Yup.string().required("Country is required"),
    MagazineShippingAddress: Yup.string().required("Magazine address required"),
    YearExperience: Yup.number().required("Year of experience is required"),
  });

  const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
  const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;
  const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;

  async function uploadAdapter(loader) {
    const s3 = new AWS.S3({
      accessKeyId,
      secretAccessKey,
      region: "ap-south-1",
    });

    const uploadParams = {
      Bucket: bucketName,
      Key: loader.name,
      Body: loader,
    };

    try {
      const uploadData = await s3.upload(uploadParams).promise();

      const urlParams = {
        Bucket: bucketName,
        Key: loader.name,
        Expires: 60 * 60,
      };

      s3.getSignedUrl("getObject", urlParams, async (err, url) => {
        if (err) {
          console.error("Error generating pre-signed URL:", err);
          return;
        }

        setProfilePic(url);
        localStorage.setItem("profilePic", url);
        console.log("Pre-signed URL generated successfully:", url);
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      uploadAdapter(event.target.files[0]);
    }
  };

  useEffect(() => {
    console.log("Current profilePic state:", profilePic);
  }, [profilePic]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      values.ProfilePicture = profilePic;
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
            className="hidden bg-cover lg:block lg:w-1/3"
            style={{
              backgroundImage:
                "url('https://www.indian-architects.com/images/Projects/88/59/40/bd48c6e62dca4a79acde62069f5966ad/bd48c6e62dca4a79acde62069f5966ad.6e7b65d0.jpg')",
            }}
          ></div>

          <div className="flex items-center w-full max-w-5xl p-2 px-20 mx-auto lg:w-2/3">
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-10 tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Get your account now.
              </h1>

              <div>
                <div>
                  <div className="mb-4 flex space-x-2 p-2 bg-white rounded-lg shadow-md">
                    {[1, 2, 3, 4, 5, 6]
                      .filter((tabIndex) => {
                        return !(
                          tabIndex === 3 &&
                          (profileType === "Company" ||
                            profileType === "Product")
                        );
                      })
                      .map((tabIndex, index) => (
                        <button
                          key={tabIndex}
                          onClick={() => setOpenTab(tabIndex)}
                          className={`flex-1 py-2 px-2 rounded-md  focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                            openTab === tabIndex ? "bg-gray-800 text-white" : ""
                          }`}
                        >
                          {tabIndex === 1 && "Personal"}
                          {tabIndex === 2 && "Profession"}
                          {tabIndex === 3 && "Education"}
                          {tabIndex === 4 && "Contact"}
                          {tabIndex === 5 && "Other"}
                          {tabIndex === 6 && "Software Experience"}
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
                          {openTab === 1 && (
                            <PersonalInfo
                              handleNext={handleNext}
                              isSubmitting={isSubmitting}
                            />
                          )}
                          {openTab === 2 && (
                            <ProfessionalInfo
                              handleNext={handleNext}
                              handlePrevious={handlePrevious}
                            />
                          )}
                          {openTab === 3 &&
                            profileType !== "Company" &&
                            profileType !== "Product" && (
                              <EducationInfo
                                handleNext={handleNext}
                                handlePrevious={handlePrevious}
                              />
                            )}
                          {openTab === 4 && (
                            <ContactInfo
                              handleNext={handleNext}
                              handlePrevious={handlePrevious}
                              handleImageUpload={handleImageUpload}
                            />
                          )}
                          {openTab === 5 && (
                            <OtherInfo
                              handlePrevious={handlePrevious}
                              handleNext={handleNext}
                            />
                          )}
                          {openTab === 6 && (
                            <SoftwareExperience
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
