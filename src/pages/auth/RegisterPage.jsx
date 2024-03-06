import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import InputField from "../../components/common/form/InputField";

const RegisterPage = () => {
  const [educationInput, setEducationInput] = useState([]);
  const [professionalInput, setProfessionalInput] = useState([]);

  const handleDeleteEducationInput = (index) => {
    const updatedEducationInput = [...educationInput];
    updatedEducationInput.splice(index, 1);
    setEducationInput(updatedEducationInput);
  };

  const handleDeleteProfessionalInput = (index) => {
    const updatedProfessionalInput = [...professionalInput];
    updatedProfessionalInput.splice(index, 1);
    setProfessionalInput(updatedProfessionalInput);
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

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-gray-800">
                Get your account now.
              </h1>

              <form>
                <div className="space-y-12 ">
                  <div className="">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-2 sm:col-start-1">
                        <InputField label={"Name"} name={"name"} id={"name"} />
                      </div>

                      <div className="sm:col-span-2">
                        <InputField label={"Email"} name={"name"} id={"name"} />
                      </div>

                      <div className="sm:col-span-2">
                        <InputField
                          label={"Password"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-3">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Bio
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="cover-photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Profile Picture
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4">
                          <div className="text-center">
                            <div className="mt-2 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer  rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span
                        className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          setEducationInput([...educationInput, ""]);
                        }}
                      >
                        <IoIosAddCircleOutline /> Add Education
                      </span>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {educationInput.map((item, i) => {
                          return (
                            <div className="sm:col-span-2" key={i}>
                              <label
                                htmlFor={`city${i}`}
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Education {i + 1}
                              </label>
                              <div className="mt-2 relative">
                                <input
                                  type="text"
                                  name={`city${i}`}
                                  id={`city${i}`}
                                  autoComplete="address-level2"
                                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 px-3 py-1.5 text-gray-600"
                                  onClick={() => handleDeleteEducationInput(i)}
                                >
                                  <TiDeleteOutline />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <span
                        className="text-blue-900 underline mt-5 flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          setProfessionalInput([...professionalInput, ""]);
                        }}
                      >
                        <IoIosAddCircleOutline /> Add Professional Experience
                      </span>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {professionalInput.map((item, i) => {
                          return (
                            <div className="sm:col-span-2" key={i}>
                              <label
                                htmlFor={`city${i}`}
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Professional Experience {i + 1}
                              </label>
                              <div className="mt-2 relative">
                                <input
                                  type="text"
                                  name={`city${i}`}
                                  id={`city${i}`}
                                  autoComplete="address-level2"
                                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                  type="button"
                                  className="absolute inset-y-0 right-0 px-3 py-1.5 text-gray-600"
                                  onClick={() =>
                                    handleDeleteProfessionalInput(i)
                                  }
                                >
                                  <TiDeleteOutline />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Professional Start Year"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Phone Number"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Website Link"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Contact Email Address"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Country"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <InputField
                          label={"Operation Range"}
                          name={"name"}
                          id={"name"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <button
                    className="relative group block w-full bg-gray-800 mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-sky-500 rounded-full overflow-hidden"
                    type="submit"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Register</span>
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-gray-900">
                    <span>Already have an account?</span>
                    <a
                      className="inline-block ml-1 text-sky-500 font-bold hover:text-orange-700"
                      href="#"
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
