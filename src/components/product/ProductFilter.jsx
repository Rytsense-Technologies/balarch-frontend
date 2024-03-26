import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Option, Select } from "@material-tailwind/react";

export const ProductFilter = () => {
  const filters = [
    {
      id: "Type",
      name: "Type",
    },
    {
      id: "Country",
      name: "Country",
    },
    {
      id: "Name",
      name: "Name",
    },
    {
      id: "Properties",
      name: "Properties",
      options: [
        { value: "Acoustic Insulation", label: "Acoustic Insulation" },
        { value: "Anti-Corrosion", label: "Anti-Corrosion" },
        { value: "Antibacterial", label: "Antibacterial" },
        { value: "Certification", label: "Certification" },
        { value: "Chemical Free", label: "Chemical Free" },
        { value: "Decay Resistant", label: "Decay Resistant" },
        { value: "Energy Efficiency", label: "Energy Efficiency" },
        { value: "Fireproof", label: "Fireproof" },
        { value: "Insect Resistant", label: "Insect Resistant" },
        { value: "Natural", label: "Natural" },
        { value: "Non-Slip", label: "Non-Slip" },
        { value: "Recycled Material", label: "Recycled Material" },
        { value: "Recycled Plastic", label: "Recycled Plastic" },
        { value: "Security", label: "Security" },
        { value: "Solar control", label: "Solar control" },
        { value: "Stainless / Rust proof", label: "Stainless / Rust proof" },
        { value: "Synthetic", label: "Synthetic" },
        { value: "Thermal Insulation", label: "Thermal Insulation" },
        { value: "Thermally Modified", label: "Thermally Modified" },
        { value: "UV Protection", label: "UV Protection" },
        { value: "Waterproof", label: "Waterproof" },
      ],
    },

    {
      id: "Applications",
      name: "Applications",
      options: [
        {
          label: "Structural Components",
          value: "Structural Components",
        },
        {
          label: "Flooring & Tiling",
          value: "Flooring & Tiling",
        },
        {
          label: "Insulation & Waterproofing",
          value: "Insulation & Waterproofing",
        },
        {
          label: "Roofing Materials",
          value: "Roofing Materials",
        },
        {
          label: "Windows & Doors",
          value: "Windows & Doors",
        },
        {
          label: "Interior Finishes",
          value: "Interior Finishes",
        },
        {
          label: "Landscaping Materials",
          value: "Landscaping Materials",
        },
        {
          label: "Electrical Systems",
          value: "Electrical Systems",
        },
        {
          label: "Plumbing Systems",
          value: "Plumbing Systems",
        },
        {
          label: "Facades & Cladding",
          value: "Facades & Cladding",
        },
        {
          label: "Heating & Cooling Systems",
          value: "Heating & Cooling Systems",
        },
        {
          label: "Paints & Coatings",
          value: "Paints & Coatings",
        },
        {
          label: "Safety & Security Systems",
          value: "Safety & Security Systems",
        },
        {
          label: "Lighting Solutions",
          value: "Lighting Solutions",
        },
        {
          label: "Acoustical Solutions",
          value: "Acoustical Solutions",
        },
      ],
    },

    {
      id: "Certifications",
      name: "Certifications",
      options: [
        { value: "LEED", label: "LEED" },
        { value: "ENERGY STAR", label: "ENERGY STAR" },
        { value: "Green Seal", label: "Green Seal" },
        { value: "BREEAM", label: "BREEAM" },
        {
          value: "ISO 9001 (Quality Management)",
          label: "ISO 9001 (Quality Management)",
        },
        {
          value: "ISO 14001 (Environmental Management)",
          label: "ISO 14001 (Environmental Management)",
        },
        { value: "WELL Building Standard", label: "WELL Building Standard" },
        { value: "Passive House", label: "Passive House" },
        {
          value: "Cradle to Cradle Certified",
          label: "Cradle to Cradle Certified",
        },
        {
          value: "FSC (Forest Stewardship Council)",
          label: "FSC (Forest Stewardship Council)",
        },
        {
          value: "Greenguard Certification",
          label: "Greenguard Certification",
        },
        { value: "EPEAT", label: "EPEAT" },
        {
          value: "Living Building Challenge",
          label: "Living Building Challenge",
        },
        {
          value: "SITES for sustainable landscapes",
          label: "SITES for sustainable landscapes",
        },
        { value: "WaterSense", label: "WaterSense" },
      ],
    },

    {
      id: "size",
      name: "Materials",
      options: [
        { value: "Aluminum", label: "Aluminum" },
        { value: "Bamboo", label: "Bamboo" },
        { value: "Brick", label: "Brick" },
        { value: "Ceramic", label: "Ceramic" },
        { value: "Composite materials", label: "Composite materials" },
        { value: "Concrete", label: "Concrete" },
        { value: "Fabric", label: "Fabric" },
        { value: "Fiberglass", label: "Fiberglass" },
        { value: "Fibre cement", label: "Fibre cement" },
        { value: "Glass", label: "Glass" },
        { value: "Granite", label: "Granite" },
        { value: "Ice", label: "Ice" },
        { value: "Limestone", label: "Limestone" },
        { value: "Marble", label: "Marble" },
        { value: "Metal", label: "Metal" },
        { value: "Paper", label: "Paper" },
        { value: "Plaster", label: "Plaster" },
        { value: "Plasterboard", label: "Plasterboard" },
        { value: "Plastic", label: "Plastic" },
        { value: "Policarbonato", label: "Policarbonato" },
        { value: "Polypropylene", label: "Polypropylene" },
        { value: "Porcelain", label: "Porcelain" },
        { value: "Quartz", label: "Quartz" },
        { value: "Rammed Earth", label: "Rammed Earth" },
        { value: "Recycled material", label: "Recycled material" },
        { value: "Resin", label: "Resin" },
        { value: "Sandstone", label: "Sandstone" },
        { value: "Slate", label: "Slate" },
        { value: "Stainless steel", label: "Stainless steel" },
        { value: "Steel", label: "Steel" },
        { value: "Stone", label: "Stone" },
        { value: "Terracotta", label: "Terracotta" },
        { value: "Wallpaper", label: "Wallpaper" },
        { value: "Wood", label: "Wood" },
        { value: "Wood-based panels", label: "Wood-based panels" },
      ],
    },
  ];
  return (
    <div className="max-w-lg mx-auto px-4">
      <h1 className="text-lg text-gray-400 font-bold mt-8 mb-4">
        Buscar profesionales
      </h1>
      <div className="flex flex-col gap-4 font-semibold capitalize">
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
      <div className="py-10 mt-6 h-20 w-full p-4 bg-gray-300">
        <span className="flex justify-center text-sm">Sponsor</span>
      </div>
    </div>
  );
};
