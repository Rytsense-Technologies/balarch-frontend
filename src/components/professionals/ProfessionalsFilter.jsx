import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Option, Select } from "@material-tailwind/react";

const filters = [
  {
    id: "size",
    name: "Architecture name",
  },
  {
    id: "color",
    name: "Occupation",
    options: [
      { value: "Micro", label: "Up to 500 sq. ft." },
      { value: "Mini", label: "501 - 2,000 sq. ft." },
      { value: "Small", label: "2,001 - 10,000 sq. ft." },
      { value: "Medium", label: "10,001 - 50,000 sq. ft." },
      { value: "Large", label: "50,001 - 200,000 sq. ft." },
      { value: "Major", label: "200,001 - 1,000,000 sq. ft." },
      { value: "Urban", label: "1,000,001 - 10,000,000 sq. ft." },
      { value: "Master", label: "10,000,001 sq. ft - +" },
    ],
  },
  {
    id: "category",
    name: "Industry",
    options: [{ value: "new-arrivals", label: "Todos" }],
  },
  {
    id: "size",
    name: "Concentration",
    options: [{ value: "2l", label: "2002" }],
  },
  {
    id: "size",
    name: "Location",
    options: [{ value: "2l", label: "2002" }],
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
                        {section.name === "ORDEN" ? (
                          <Select variant="standard" label="Select Version">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                          </Select>
                        ) : (
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm lg:text-md font-normal text-gray-600"
                          >
                            {option.label}
                          </label>
                        )}
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
