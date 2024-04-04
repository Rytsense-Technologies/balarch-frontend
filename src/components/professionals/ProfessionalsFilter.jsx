import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const filters = [
  {
    id: "size",
    name: "Architecture name",
  },
  {
    id: "color",
    name: "Occupation",
    options: [
      { value: "Professional Profiles", label: "Professional Profiles" },
      { value: "Student Profiles", label: "Student Profiles" },
      { value: "Professors Profiles", label: "Architecture" },
      { value: "Company Profiles", label: "Company Profiles" },
      { value: "Product Profiles", label: "Product Profiles" },
    ],
  },
  {
    id: "Industry",
    name: "Industry",
    options: [
      { value: "Architecture", label: "Architecture" },
      { value: "Landscape Architecture", label: "Landscape Architecture" },
      { value: "Interior Design", label: "Interior Design" },
      { value: "Electrical Engineering", label: "Electrical Engineering" },
      { value: "Structural Engineering", label: "Structural Engineering" },
      { value: "Civil Engineering", label: "Civil Engineering" },
      { value: "Mechanical Engineering", label: "Mechanical Engineering" },
      { value: "Geotechnical Engineering", label: "Geotechnical Engineering" },
      {
        value: "Construction and Building Industry",
        label: "Construction and Building Industry",
      },
      {
        value: "Urban and Regional Planning",
        label: "Urban and Regional Planning",
      },
      {
        value: "Environmental and Sustainability Design",
        label: "Environmental and Sustainability Design",
      },
      { value: "Lighting Design", label: "Lighting Design" },
      { value: "Acoustic Design", label: "Acoustic Design" },
      {
        value: "Technology and Information Systems in Architecture",
        label: "Technology and Information Systems in Architecture",
      },
      {
        value: "Accessibility and Inclusive Design",
        label: "Accessibility and Inclusive Design",
      },
      { value: "Graphic Design", label: "Graphic Design" },
      { value: "Architectural Rendering", label: "Architectural Rendering" },
      { value: "Professional Photography", label: "Professional Photography" },
      { value: "Building Materials", label: "Building Materials" },
    ],
  },
  {
    id: "Concentration",
    name: "Concentration",
    options: [
      { value: "Residential", label: "Residential" },
      { value: "Commercial & Retail", label: "Commercial & Retail" },
      { value: "Cultural & Civic", label: "Cultural & Civic" },
      {
        value: "Industrial & Manufacturing Architecture",
        label: "Industrial & Manufacturing Architecture",
      },
      {
        value: "Healthcare & Wellness Architecture",
        label: "Healthcare & Wellness Architecture",
      },
      {
        value: "Public Infrastructure & Civic Buildings",
        label: "Public Infrastructure & Civic Buildings",
      },
      {
        value: "Historical & Heritage Architecture",
        label: "Historical & Heritage Architecture",
      },
      {
        value: "Recreation & Sports Architecture",
        label: "Recreation & Sports Architecture",
      },
      {
        value: "Environmental & Sustainable Architecture",
        label: "Environmental & Sustainable Architecture",
      },
      {
        value: "Urban Planning & Master Planning",
        label: "Urban Planning & Master Planning",
      },
      {
        value: "Interior Design & Interiors",
        label: "Interior Design & Interiors",
      },
      {
        value: "Landscape Architecture & Design",
        label: "Landscape Architecture & Design",
      },
      {
        value: "Temporary & Installation Architecture",
        label: "Temporary & Installation Architecture",
      },
      {
        value: "Emerging & Experimental Architecture",
        label: "Emerging & Experimental Architecture",
      },
      {
        value: "Sustainability & Green Building",
        label: "Sustainability & Green Building",
      },
      { value: "Multidisciplinary", label: "Multidisciplinary" },
      { value: "Accessibility", label: "Accessibility" },
      { value: "Bathroom and Kitchen", label: "Bathroom and Kitchen" },
      { value: "Furniture and Storage", label: "Furniture and Storage" },
      { value: "Lighting and Electrical", label: "Lighting and Electrical" },
      {
        value: "Architectural Elements and Systems",
        label: "Architectural Elements and Systems",
      },
      { value: "Materials and Finishes", label: "Materials and Finishes" },
      { value: "Outdoor and Landscape", label: "Outdoor and Landscape" },
      { value: "Plumbing and HVAC", label: "Plumbing and HVAC" },
      { value: "Technology and Equipment", label: "Technology and Equipment" },
      { value: "Hardware and Fixtures", label: "Hardware and Fixtures" },
      { value: "Miscellaneous", label: "Miscellaneous" },
    ],
  },
  {
    id: "Location",
    name: "Location",
    options: [
      { value: "New York", label: "New York" },
      { value: "Los Angeles", label: "Los Angeles" },
      { value: "Chicago", label: "Chicago" },
      { value: "Houston", label: "Houston" },
      { value: "Phoenix", label: "Phoenix" },
    ],
  },
];

export const ProfessionalsFilter = () => {
  return (
    <div className="py-5 lg:py-10">
      <span className="text-lg text-gray-400 font-bold">
        Search Professionals
      </span>
      <div className="flex flex-col mt-3 lg:mt-5 p-2 font-bold gap-2">
        {filters.map((section) => (
          <Disclosure
            as="div"
            key={section.id}
            className="border-b-2 border-gray-800 py-2"
          >
            {({ open }) => (
              <>
                <h3 className="-my-2 lg:my-0 lg:flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-2 lg:py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-semibold text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-4 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-3 lg:pt-6">
                  <div className="space-y-3">
                    {section?.options?.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <div>
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm lg:text-md font-normal text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
