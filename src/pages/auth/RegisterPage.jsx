import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ContactInfo from "../../components/auth/register/ContactInfo";
import EducationInfo from "../../components/auth/register/EducationInfo";
import OtherInfo from "../../components/auth/register/OtherInfo";
import PersonalInfo from "../../components/auth/register/PersonalInfo";
import ProfessionalInfo from "../../components/auth/register/ProfessionalInfo";

// const registrationSchema = Yup.object().shape({
//   Email: Yup.string().email("Invalid email").required("Email is required"),
//   Password: Yup.string()
//     .min(2, "Password must be at least 8 characters")
//     .required("Password is required"),
//   Name: Yup.string().required("Name is required"),
//   ShortBio: Yup.string().required("ShortBio is required"),
//   Profession: Yup.string().required("Profession is required"),

//   EducationalInstitute1: Yup.string().required(
//     "EducationalInstitute1 is required"
//   ),
//   EducationDegree1: Yup.string().required("EducationDegree1 is required"),
//   EducationTitle1: Yup.string().required("EducationTitle1 is required"),
//   EducationYear1: Yup.string().required("EducationYear1 is required"),

//   EducationalInstitute2: Yup.string().required(
//     "EducationalInstitute2 is required"
//   ),
//   EducationDegree2: Yup.string().required("EducationDegree2 is required"),
//   EducationTitle2: Yup.string().required("EducationTitle2 is required"),
//   EducationYear2: Yup.string().required("EducationYear2 is required"),

//   EducationalInstitute3: Yup.string().required(
//     "EducationalInstitute3 is required"
//   ),
//   EducationDegree3: Yup.string().required("EducationDegree3 is required"),
//   EducationTitle3: Yup.string().required("EducationTitle3 is required"),
//   EducationYear3: Yup.string().required("EducationYear3 is required"),

//   CompanyProfessionalExperience1: Yup.string().required(
//     "CompanyProfessionalExperience1 is required"
//   ),
//   PositionProfessionalExperience1: Yup.string().required(
//     "PositionProfessionalExperience1 is required"
//   ),
//   YearProfessionalExperience1: Yup.string().required(
//     "YearProfessionalExperience1 is required"
//   ),

//   CompanyProfessionalExperience2: Yup.string().required(
//     "CompanyProfessionalExperience2 is required"
//   ),
//   PositionProfessionalExperience2: Yup.string().required(
//     "PositionProfessionalExperience2 is required"
//   ),
//   YearProfessionalExperience2: Yup.string().required(
//     "YearProfessionalExperience2 is required"
//   ),

//   StartYear: Yup.string().required("StartYear is required"),
//   WebsiteLink: Yup.string().required("WebsiteLink is required"),
//   ContactEmailAddress: Yup.string().required("ContactEmailAddress is required"),
//   ContactPhoneNumber: Yup.string().required("ContactPhoneNumber is required"),
//   ProfilePicture: Yup.string().required("ProfilePicture is required"),
//   Country: Yup.string().required("Country is required"),
//   MagazineShippingAddress: Yup.string().required(
//     "MagazineShippingAddress is required"
//   ),

//   OperationRange: Yup.string().required("OperationRange is required"),
//   FacebookIconLink: Yup.string().required("FacebookIconLink is required"),
//   InstagramIconLink: Yup.string().required("InstagramIconLink is required"),
//   IssueIconLink: Yup.string().required("IssueIconLink is required"),
//   XIconLink: Yup.string().required("XIconLink is required"),
//   YoutubeIconLink: Yup.string().required("YoutubeIconLink is required"),
//   YearExperience: Yup.string().required("YearExperience is required"),

//   IconsOfProfessionalSoftwares: Yup.string().required("Email is required"),
// });

const RegisterPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ShortBio, setShortBio] = useState("");
  const [Profession, setProfession] = useState("");
  const [ProfessionalPosition, setProfessionalPosition] = useState("");
  const [EducationalInstitute1, setEducationalInstitute1] = useState("");
  const [EducationDegree1, setEducationDegree1] = useState("");
  const [EducationTitle1, setEducationTitle1] = useState("");
  const [EducationYear1, setEducationYear1] = useState("");

  const [EducationalInstitute2, setEducationalInstitute2] = useState("");
  const [EducationDegree2, setEducationDegree2] = useState("");
  const [EducationTitle2, setEducationTitle2] = useState("");
  const [EducationYear2, setEducationYear2] = useState("");

  const [EducationalInstitute3, setEducationalInstitute3] = useState("");
  const [EducationDegree3, setEducationDegree3] = useState("");
  const [EducationTitle3, setEducationTitle3] = useState("");
  const [EducationYear3, setEducationYear3] = useState("");

  const [CompanyProfessionalExperience1, setCompanyProfessionalExperience1] =
    useState("");
  const [PositionProfessionalExperience1, setPositionProfessionalExperience1] =
    useState("");
  const [YearProfessionalExperience1, setYearProfessionalExperience1] =
    useState("");

  const [CompanyProfessionalExperience2, setCompanyProfessionalExperience2] =
    useState("");
  const [PositionProfessionalExperience2, setPositionProfessionalExperience2] =
    useState("");
  const [YearProfessionalExperience2, setYearProfessionalExperience2] =
    useState("");

  const [StartYear, setStartYear] = useState("");
  const [WebsiteLink, setWebsiteLink] = useState("");
  const [ContactEmailAddress, setContactEmailAddress] = useState("");
  const [ContactPhoneNumber, setContactPhoneNumber] = useState("");
  const [ProfilePicture, setProfilePicture] = useState("");
  const [Country, setCountry] = useState("");
  const [MagazineShippingAddress, setMagazineShippingAddress] = useState("");

  const [OperationRange, setOperationRange] = useState("");
  const [FacebookIconLink, setFacebookIconLink] = useState("");
  const [InstagramIconLink, setInstagramIconLink] = useState("");
  const [IssueIconLink, setIssueIconLink] = useState("");
  const [XIconLink, setXIconLink] = useState("");
  const [YoutubeIconLink, setYoutubeIconLink] = useState("");
  const [YearExperience, setYearExperience] = useState("");

  const [activeTab, setActiveTab] = useState("html");

  const handleNext = () => {
    const tabs = ["html", "react", "vue", "angular", "svelte"];
    const currentIndex = tabs.indexOf(activeTab);
    const nextTab = tabs[currentIndex + 1];
    setActiveTab(nextTab);
  };

  const handlePrevious = () => {
    const tabs = ["html", "react", "vue", "angular", "svelte"];
    const currentIndex = tabs.indexOf(activeTab);
    const previousTab = tabs[currentIndex - 1];
    setActiveTab(previousTab);
  };
  const data = [
    {
      label: "Personal",
      value: "html",
      desc: (
        <PersonalInfo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          Email={Email}
          setEmail={setEmail}
          Password={Password}
          setPassword={setPassword}
          Name={Name}
          setName={setName}
          ShortBio={ShortBio}
          setShortBio={setShortBio}
          Profession={Profession}
          setProfession={setProfession}
        />
      ),
    },
    {
      label: "Education",
      value: "react",
      desc: (
        <EducationInfo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          EducationalInstitute1={EducationalInstitute1}
          EducationTitle1={EducationTitle1}
          EducationDegree1={EducationDegree1}
          EducationYear1={EducationYear1}
          EducationalInstitute2={EducationalInstitute2}
          EducationTitle2={EducationTitle2}
          EducationDegree2={EducationDegree2}
          EducationYear2={EducationYear2}
          EducationalInstitute3={EducationalInstitute3}
          EducationTitle3={EducationTitle3}
          EducationDegree3={EducationDegree3}
          EducationYear3={EducationYear3}
          setEducationDegree1={setEducationDegree1}
          setEducationDegree2={setEducationDegree2}
          setEducationDegree3={setEducationDegree3}
          setEducationTitle1={setEducationTitle1}
          setEducationTitle2={setEducationTitle2}
          setEducationTitle3={setEducationTitle3}
          setEducationYear1={setEducationYear1}
          setEducationYear2={setEducationYear2}
          setEducationYear3={setEducationYear3}
          setEducationalInstitute1={setEducationalInstitute1}
          setEducationalInstitute2={setEducationalInstitute2}
          setEducationalInstitute3={setEducationalInstitute3}
        />
      ),
    },
    {
      label: "Professional",
      value: "vue",
      desc: (
        <ProfessionalInfo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          CompanyProfessionalExperience1={CompanyProfessionalExperience1}
          PositionProfessionalExperience1={PositionProfessionalExperience1}
          YearProfessionalExperience1={YearProfessionalExperience1}
          setCompanyProfessionalExperience1={setCompanyProfessionalExperience1}
          setPositionProfessionalExperience1={
            setPositionProfessionalExperience1
          }
          setYearProfessionalExperience1={setYearProfessionalExperience1}
          CompanyProfessionalExperience2={CompanyProfessionalExperience2}
          PositionProfessionalExperience2={PositionProfessionalExperience2}
          YearProfessionalExperience2={YearProfessionalExperience2}
          setCompanyProfessionalExperience2={setCompanyProfessionalExperience2}
          setPositionProfessionalExperience2={
            setPositionProfessionalExperience2
          }
          setYearProfessionalExperience2={setYearProfessionalExperience2}
        />
      ),
    },
    {
      label: "Contact",
      value: "angular",
      desc: (
        <ContactInfo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          StartYear={StartYear}
          WebsiteLink={WebsiteLink}
          ContactEmailAddress={ContactEmailAddress}
          ContactPhoneNumber={ContactPhoneNumber}
          ProfilePicture={ProfilePicture}
          Country={Country}
          MagazineShippingAddress={MagazineShippingAddress}
          setStartYear={setStartYear}
          setWebsiteLink={setWebsiteLink}
          setContactEmailAddress={setContactEmailAddress}
          setContactPhoneNumber={setContactPhoneNumber}
          setProfilePicture={setProfilePicture}
          setCountry={setCountry}
          setMagazineShippingAddress={setMagazineShippingAddress}
        />
      ),
    },
    {
      label: "Other",
      value: "svelte",
      desc: (
        <OtherInfo
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          OperationRange={OperationRange}
          FacebookIconLink={FacebookIconLink}
          InstagramIconLink={InstagramIconLink}
          IssueIconLink={IssueIconLink}
          XIconLink={XIconLink}
          YoutubeIconLink={YoutubeIconLink}
          YearExperience={YearExperience}
          setOperationRange={setOperationRange}
          setFacebookIconLink={setFacebookIconLink}
          setInstagramIconLink={setInstagramIconLink}
          setIssueIconLink={setIssueIconLink}
          setXIconLink={setXIconLink}
          setYoutubeIconLink={setYoutubeIconLink}
          setYearExperience={setYearExperience}
          signUp={signUp}
        />
      ),
    },
  ];
 
  async function signUp() {
    let item = { Email, Password, Name, ShortBio, Profession, ProfessionalPosition,    EducationalInstitute1,
    EducationTitle1,
    EducationDegree1,
    EducationYear1,
    EducationalInstitute2,
    EducationTitle2,
    EducationDegree2,
    EducationYear2,
    EducationalInstitute3,
    EducationTitle3,
    EducationDegree3,
    EducationYear3,
    CompanyProfessionalExperience1,
    PositionProfessionalExperience1,
    YearProfessionalExperience1,
    CompanyProfessionalExperience2,
    PositionProfessionalExperience2,
    YearProfessionalExperience2,
    StartYear,
    WebsiteLink,
    ContactEmailAddress,
    ContactPhoneNumber,
    ProfilePicture,
    Country,
    MagazineShippingAddress,
    OperationRange,
    FacebookIconLink,
    InstagramIconLink,
    IssueIconLink,
    XIconLink,
    YoutubeIconLink,
    YearExperience, 
  }

    let result = await fetch("http://54.167.20.39:8080/api/signup/create",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept": 'application/json'
      }

    })
    result = await  result.json()
  }

  return (
    <div>
      <section className="bg-white ">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://www.indian-architects.com/images/Projects/88/59/40/bd48c6e62dca4a79acde62069f5966ad/bd48c6e62dca4a79acde62069f5966ad.6e7b65d0.jpg')",
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-10 tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Get your account now.
              </h1>
              
                  <form>
                    <Tabs value="html">
                      <TabsHeader className="stickey">
                        {data.map(({ label, value }) => (
                          <Tab key={value} value={value}>
                            {label}
                          </Tab>
                        ))}
                      </TabsHeader>
                      <TabsBody>
                        {data.map(({ value, desc }) => (
                          <TabPanel key={value} value={value}>
                            {desc}
                          </TabPanel>
                        ))}
                      </TabsBody>
                    </Tabs>
                    <div className="text-center">
                      <span className="text-xs font-semibold text-gray-900">
                        <span>Already have an account?</span>
                        <a
                          className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700"
                        
                        >
                          Sign In
                        </a>
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

export default RegisterPage;
