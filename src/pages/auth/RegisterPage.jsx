import { useState } from "react";
import { useDispatch } from "react-redux";
import ContactInfo from "../../components/auth/register/ContactInfo";
import EducationInfo from "../../components/auth/register/EducationInfo";
import OtherInfo from "../../components/auth/register/OtherInfo";
import PersonalInfo from "../../components/auth/register/PersonalInfo";
import ProfessionalInfo from "../../components/auth/register/ProfessionalInfo";
import { registerUser } from "../../redux/slice/authSlice";
const RegisterPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ShortBio, setShortBio] = useState("");
  const [Profession, setProfession] = useState("");
  const [ProfessionPositionName, setProfessionPositionName] = useState("");
  const [EducationalInstitute1, setEducationalInstitute1] = useState("");
  const [EducationDegree1, setEducationDegree1] = useState("");
  const [EducationTitle1, setEducationTitle1] = useState("");
  const [EducationYear1, setEducationYear1] = useState(null);

  const [EducationalInstitute2, setEducationalInstitute2] = useState("");
  const [EducationDegree2, setEducationDegree2] = useState("");
  const [EducationTitle2, setEducationTitle2] = useState("");
  const [EducationYear2, setEducationYear2] = useState(null);

  const [EducationalInstitute3, setEducationalInstitute3] = useState("");
  const [EducationDegree3, setEducationDegree3] = useState("");
  const [EducationTitle3, setEducationTitle3] = useState("");
  const [EducationYear3, setEducationYear3] = useState(null);

  const [CompanyProfessionalExperience1, setCompanyProfessionalExperience1] =
    useState("");
  const [PositionProfessionalExperience1, setPositionProfessionalExperience1] =
    useState("");
  const [YearProfessionalExperience1, setYearProfessionalExperience1] =
    useState(null);

  const [CompanyProfessionalExperience2, setCompanyProfessionalExperience2] =
    useState("");
  const [PositionProfessionalExperience2, setPositionProfessionalExperience2] =
    useState("");
  const [YearProfessionalExperience2, setYearProfessionalExperience2] =
    useState(null);

  const [CompanyProfessionalExperience3, setCompanyProfessionalExperience3] =
    useState("");
  const [PositionProfessionalExperience3, setPositionProfessionalExperience3] =
    useState("");
  const [YearProfessionalExperience3, setYearProfessionalExperience3] =
    useState(null);

  const [StartYear, setStartYear] = useState("");
  const [WebsiteLink, setWebsiteLink] = useState("");
  const [ContactEmailAddress, setContactEmailAddress] = useState("");
  const [ContactPhoneNumber, setContactPhoneNumber] = useState(null);
  const [ProfilePicture, setProfilePicture] = useState("");
  const [Country, setCountry] = useState("");
  const [MagazineShippingAddress, setMagazineShippingAddress] = useState("");

  const [OperationRange, setOperationRange] = useState("");
  const [FacebookIconLink, setFacebookIconLink] = useState("");
  const [InstagramIconLink, setInstagramIconLink] = useState("");
  const [IssueIconLink, setIssueIconLink] = useState("");
  const [XIconLink, setXIconLink] = useState("");
  const [YoutubeIconLink, setYoutubeIconLink] = useState("");
  const [YearExperience, setYearExperience] = useState(null);
  const [IconsOfProfessionalSoftwares, setIconsOfProfessionalSoftwares] =
    useState("");

  const [openTab, setOpenTab] = useState(1);
  const dispatch = useDispatch();

  const handleNext = () => {
    setOpenTab(openTab + 1);
  };

  const handlePrevious = () => {
    setOpenTab(openTab - 1);
  };

  const registerHandler = () => {
    dispatch(
      registerUser({
        Email,
        Password,
        Name,
        ShortBio,
        Profession,
        ProfessionPositionName,
        EducationalInstitute1,
        EducationTitle1,
        EducationDegree1,
        EducationYear1: parseInt(EducationYear1),
        EducationalInstitute2,
        EducationTitle2,
        EducationDegree2,
        EducationYear2: parseInt(EducationYear2),
        EducationalInstitute3,
        EducationTitle3,
        EducationDegree3,
        EducationYear3: parseInt(EducationYear3),
        CompanyProfessionalExperience1,
        PositionProfessionalExperience1,
        YearProfessionalExperience1: parseInt(YearProfessionalExperience1),
        CompanyProfessionalExperience2,
        PositionProfessionalExperience2,
        YearProfessionalExperience2: parseInt(YearProfessionalExperience2),
        CompanyProfessionalExperience3,
        PositionProfessionalExperience3,
        YearProfessionalExperience3: parseInt(YearProfessionalExperience3),
        StartYear: parseInt(StartYear),
        WebsiteLink,
        ContactEmailAddress,
        ContactPhoneNumber: parseInt(ContactPhoneNumber),
        ProfilePicture,
        Country,
        MagazineShippingAddress,
        OperationRange,
        FacebookIconLink,
        InstagramIconLink,
        IssueIconLink,
        XIconLink,
        YoutubeIconLink,
        YearExperience: parseInt(YearExperience),
        IconsOfProfessionalSoftwares,
      })
    );
  };

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

          <div className="flex items-center w-full max-w-3xl p-4 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-10 tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Get your account now.
              </h1>

              <div>
                <div>
                  <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                    <button
                      onClick={() => setOpenTab(1)}
                      className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                        openTab === 1 ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      Personal
                    </button>
                    <button
                      onClick={() => setOpenTab(2)}
                      className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                        openTab === 2 ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      Education
                    </button>
                    <button
                      onClick={() => setOpenTab(3)}
                      className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                        openTab === 3 ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      Profession
                    </button>
                    <button
                      onClick={() => setOpenTab(4)}
                      className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                        openTab === 4 ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      Contact
                    </button>
                    <button
                      onClick={() => setOpenTab(5)}
                      className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                        openTab === 5 ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      Other
                    </button>
                  </div>

                  <div className="transition-all duration-300 bg-white">
                    {openTab === 1 && (
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
                        ProfessionPositionName={ProfessionPositionName}
                        setProfessionPositionName={setProfessionPositionName}
                      />
                    )}
                    {openTab === 2 && (
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
                    )}
                    {openTab === 3 && (
                      <ProfessionalInfo
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        CompanyProfessionalExperience1={
                          CompanyProfessionalExperience1
                        }
                        PositionProfessionalExperience1={
                          PositionProfessionalExperience1
                        }
                        YearProfessionalExperience1={
                          YearProfessionalExperience1
                        }
                        setCompanyProfessionalExperience1={
                          setCompanyProfessionalExperience1
                        }
                        setPositionProfessionalExperience1={
                          setPositionProfessionalExperience1
                        }
                        setYearProfessionalExperience1={
                          setYearProfessionalExperience1
                        }
                        CompanyProfessionalExperience2={
                          CompanyProfessionalExperience2
                        }
                        PositionProfessionalExperience2={
                          PositionProfessionalExperience2
                        }
                        YearProfessionalExperience2={
                          YearProfessionalExperience2
                        }
                        setCompanyProfessionalExperience2={
                          setCompanyProfessionalExperience2
                        }
                        setPositionProfessionalExperience2={
                          setPositionProfessionalExperience2
                        }
                        setYearProfessionalExperience2={
                          setYearProfessionalExperience2
                        }
                        CompanyProfessionalExperience3={
                          CompanyProfessionalExperience3
                        }
                        PositionProfessionalExperience3={
                          PositionProfessionalExperience3
                        }
                        YearProfessionalExperience3={
                          YearProfessionalExperience3
                        }
                        setCompanyProfessionalExperience3={
                          setCompanyProfessionalExperience3
                        }
                        setPositionProfessionalExperience3={
                          setPositionProfessionalExperience3
                        }
                        setYearProfessionalExperience3={
                          setYearProfessionalExperience3
                        }
                      />
                    )}
                    {openTab == 4 && (
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
                    )}
                    {openTab == 5 && (
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
                        IconsOfProfessionalSoftwares={
                          IconsOfProfessionalSoftwares
                        }
                        setIconsOfProfessionalSoftwares={
                          setIconsOfProfessionalSoftwares
                        }
                        registerHandler={registerHandler}
                      />
                    )}
                    <div className="text-center mt-10">
                      <span className="text-xs font-semibold text-gray-900">
                        <span>Already have an account?</span>
                        <a className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700">
                          Sign In
                        </a>
                      </span>
                    </div>
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
