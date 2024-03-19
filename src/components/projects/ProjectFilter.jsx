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
    name: "Size",
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
    name: "Typology",
    options: [{ value: "new-arrivals", label: "Todos" }],
  },
  {
    id: "size",
    name: "Year",
    options: [{ value: "2l", label: "2002" }],
  },
  {
    id: "size",
    name: "Location",
    options: [{ value: "2l", label: "2002" }],
  },
  {
    id: "size",
    name: "Phase",
    options: [
      { value: "Build", label: "Build" },
      { value: "Unbuild", label: "Unbuild" },
      { value: "Educational", label: "Educational" },
      { value: "Competition", label: "Competition" },
    ],
  },
  {
    id: "size",
    name: "Architecture Style",
    options: [
      { value: "Art Deco", label: "Art Deco" },
      { value: "Bauhaus", label: "Bauhaus" },
      { value: "Biophilic", label: "Biophilic" },
      { value: "Brutalist", label: "Brutalist" },
      { value: "Contemporary", label: "Contemporary" },
      { value: "Deconstructivist", label: "Deconstructivist" },
      { value: "Eclectic", label: "Eclectic" },
      { value: "Expressionist", label: "Expressionist" },
      { value: "Futurist", label: "Futurist" },
      { value: "High-Tech", label: "High-Tech" },
      { value: "Industrial", label: "Industrial" },
      { value: "Minimalist", label: "Minimalist" },
      { value: "Modern", label: "Modern" },
      { value: "Neoclassical", label: "Neoclassical" },
      { value: "Organic", label: "Organic" },
      { value: "Parametric Design", label: "Parametric Design" },
      { value: "Postmodern", label: "Postmodern" },
      { value: "Scandinavian", label: "Scandinavian" },
      { value: "Sustainable Architecture", label: "Sustainable Architecture" },
      { value: "Vernacular", label: "Vernacular" },
    ],
  },
  {
    id: "size",
    name: "Materials",
    options: [
      { value: "Aluminum", label: "Aluminum" },
      { value: "Brick", label: "Brick" },
      { value: "Ceramic", label: "Ceramic" },
      { value: "Concrete", label: "Concrete" },
      { value: "Copper", label: "Copper" },
      { value: "Glass", label: "Glass" },
      { value: "Granite", label: "Granite" },
      { value: "Ice", label: "Ice" },
      { value: "Limestone", label: "Limestone" },
      { value: "Marble", label: "Marble" },
      { value: "Metal", label: "Metal" },
      { value: "Plaster", label: "Plaster" },
      { value: "Quartz", label: "Quartz" },
      { value: "Rammed Earth", label: "Rammed Earth" },
      { value: "Sandstone", label: "Sandstone" },
      { value: "Slate", label: "Slate" },
      { value: "Stone", label: "Stone" },
      { value: "Terracotta", label: "Terracotta" },
      { value: "Wood", label: "Wood" },
    ],
  },
  {
    id: "size",
    name: "Colors",
    options: [
      { value: "Beige", label: "Beige" },
      { value: "Black", label: "Black" },
      { value: "Blue", label: "Blue" },
      { value: "Brown", label: "Brown" },
      { value: "Cream", label: "Cream" },
      { value: "Gold", label: "Gold" },
      { value: "Gray", label: "Gray" },
      { value: "Green", label: "Green" },
      { value: "Orange", label: "Orange" },
      { value: "Pink", label: "Pink" },
      { value: "Purple", label: "Purple" },
      { value: "Red", label: "Red" },
      { value: "White", label: "White" },
      { value: "Yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Certifications",
    options: [
      { value: "LEED", label: "LEED" },
      { value: "BREEAM", label: "BREEAM" },
      { value: "WELL Building Standard", label: "WELL Building Standard" },
      { value: "Green Star", label: "Green Star" },
      { value: "EDGE", label: "EDGE" },
      {
        value: "Passive House Certification",
        label: "Passive House Certification",
      },
      { value: "HQE", label: "HQE" },
      { value: "DGNB", label: "DGNB" },
      { value: "CASBEE", label: "CASBEE" },
      { value: "Green Globes", label: "Green Globes" },
      {
        value: "Estidama Pearl Rating System",
        label: "Estidama Pearl Rating System",
      },
      { value: "GRESB", label: "GRESB" },
      {
        value: "Zero Energy Certification",
        label: "Zero Energy Certification",
      },
      { value: "NABERS", label: "NABERS" },
    ],
  },
];

const ProjectFilter = () => {
  return (
    <div className="py-5 lg:py-10">
      <span className="text-lg text-gray-400 font-bold">Buscar proyectos</span>
      <div className="flex flex-col mt-3 lg:mt-5 p-2 font-bold gap-2">
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default ProjectFilter;
