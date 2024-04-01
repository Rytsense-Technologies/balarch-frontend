import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const InputField = ({
  label,
  id,
  name,
  type,
  autoComplete,
  textarea,
  rows,
}) => {
  if (textarea) {
    return (
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <Field
            as="textarea"
            name={name}
            autoComplete={autoComplete}
            rows={rows}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
    );
  } else {
    return (
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <Field
            name={name}
            type={type}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
    );
  }
};

const UploadNewProject = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const initialValues = {
    ProjectName: "",
    ProjectDescription: "",
    Concept: "",
    Innovation: "",
    Area: 0,
    Country: "",
    Year: "",
    Typology: "",
    Phase: "",
    Architecture: "",
    Style: "",
    Material: "",
    Collaborators: "",
  };

  const validationSchema = Yup.object({
    ProjectName: Yup.string().required("Project Name is required"),
    ProjectDescription: Yup.string().required(
      "Project Description is required"
    ),
    Concept: Yup.string().required("Concept is required"),
    Innovation: Yup.string().required("Innovation is required"),
    Area: Yup.string().required("Area is required"),
    Country: Yup.string().required("Country is required"),
    Year: Yup.string().required("Year is required"),
    Typology: Yup.string().required("Typology is required"),
    Phase: Yup.string().required("Phase is required"),
    Architecture: Yup.string().required("Architecture is required"),
    Style: Yup.string().required("Style is required"),
    Material: Yup.string().required("Material is required"),
    Collaborators: Yup.string().required("Collaborators is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/insertprojects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        navigate("/projects");
        toast.success("Project Uploaded successfully");
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

  const handleImageChange = (event) => {
    const files = event.currentTarget.files;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  console.log(images);
  return (
    <div className="px-20 py-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold underline underline-offset-1">
          Upload New Project
        </h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="">
              <div className=" pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <InputField
                      label="Project Name"
                      name="ProjectName"
                      type="text"
                    />
                  </div>
                  <div className="col-span-full">
                    <InputField
                      label="Description"
                      name="ProjectDescription"
                      type="text"
                      textarea
                      rows={4}
                    />
                  </div>
                  <div className="col-span-3">
                    <InputField
                      label="Concept"
                      name="Concept"
                      type="text"
                      textarea
                      rows={4}
                    />
                  </div>
                  <div className="col-span-3">
                    <InputField
                      label="Innovation"
                      name="Innovation"
                      type="text"
                      textarea
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-2 sm:col-start-1">
                    <InputField label="Area" name="Area" type="number" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Country" name="Country" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Year" name="Year" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Typology" name="Typology" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Phase" name="Phase" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField
                      label="Architecture"
                      name="Architecture"
                      type="text"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Style" name="Style" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField label="Material" name="Material" type="text" />
                  </div>

                  <div className="sm:col-span-2">
                    <InputField
                      label="Collaborators"
                      name="Collaborators"
                      type="text"
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="multiple_files"
                    >
                      Upload Project images
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="multiple_files"
                      type="file"
                      multiple
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-4 mt-8">
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Image ${index}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              >
                {isSubmitting ? "Uploading..." : "Upload"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UploadNewProject;
