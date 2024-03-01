import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Option, Select } from "@material-tailwind/react";

const filters = [
  {
    id: "size",
    name: "ORDEN",
  },
  {
    id: "color",
    name: "CATEGORÍA",
    options: [
      { value: "Todas", label: "Todas" },
      { value: "Comercial", label: "Comercial" },
      {
        value: "Cuidado de la salud",
        label: "Cuidado de la salud",
      },
      { value: "Cultural", label: "Cultural" },
      { value: "Educativo", label: "Educativo" },
      { value: "Hospitalidad", label: "Hospitalidad" },
      { value: "Industrial", label: "Industrial" },
      { value: "Reformas", label: "Reformas" },
      { value: "Residencial", label: "Residencial" },
    ],
  },
  {
    id: "category",
    name: "PAÍS Ó CIUDAD",
    options: [
      { value: "new-arrivals", label: "Todos" },
      { value: "sale", label: "Ajijic" },
      { value: "travel", label: "Alemania" },
      { value: "organization", label: "Bangkok" },
      { value: "accessories", label: "Barcelona" },
      { value: "new-arrivals", label: "Beijing" },
      { value: "sale", label: "Brasil" },
      { value: "travel", label: "CDMX" },
      { value: "organization", label: "China" },
      { value: "accessories", label: "Düsseldorf" },
    ],
  },
  {
    id: "size",
    name: "AÑO",
    options: [
      { value: "2l", label: "2002" },
      { value: "6l", label: "2015" },
      { value: "12l", label: "2020" },
      { value: "18l", label: "2021" },
      { value: "20l", label: "2022" },
      { value: "40l", label: "2023" },
    ],
  },
];

const ProjectFilter = () => {
  return (
    <div className="py-10">
      <span className="text-lg text-gray-400 font-bold">Buscar proyectos</span>
      <div className="flex flex-col mt-5 p-2 font-bold gap-4">
        <form className="hidden lg:block">
          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-b-2 border-gray-800 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-semibold text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
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
                              className="ml-3 text-md font-normal text-gray-600"
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
