import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const filters = [
  {
    id: "type",
    name: "Type",
    options: [
      {
        value: "Accessibility",
        label: "Accessibility",
        subcategories: [
          { value: "Accessibility Bathroom", label: "Accessibility Bathroom" },
          { value: "Handicap Bathroom", label: "Handicap Bathroom" },
        ],
      },
      {
        value: "Bathroom and Kitchen",
        label: "Bathroom and Kitchen",
        subcategories: [
          { value: "bathroom_accessories", label: "Bathroom Accessories" },
          { value: "bathroom_furniture", label: "Bathroom Furniture" },
          { value: "bathrooms", label: "Bathrooms" },
          { value: "bathtubs", label: "Bathtubs" },
          { value: "bidet", label: "Bidet" },
          { value: "faucets", label: "Faucets" },
          { value: "kitchen_accessories", label: "Kitchen Accessories" },
          {
            value: "kitchen_furniture_countertops",
            label: "Kitchen Furniture / Countertops",
          },
          { value: "sinks", label: "Sinks" },
          { value: "toilets_bidets", label: "Toilets / Bidets" },
          { value: "toilets_urinals", label: "Toilets / Urinals" },
          { value: "urinals", label: "Urinals" },
        ],
      },
      {
        value: "Furniture and Storage",
        label: "Furniture and Storage",
        subcategories: [
          { value: "armchairs", label: "Armchairs" },
          { value: "couches", label: "Couches" },
          { value: "futons", label: "Futons" },
          { value: "poufs", label: "Poufs" },
          { value: "bedroom_furniture", label: "Bedroom Furniture" },
          { value: "benches", label: "Benches" },
          { value: "bicycle_rack", label: "Bicycle Rack" },
          { value: "bollards", label: "Bollards" },
          { value: "cabinets", label: "Cabinets" },
          { value: "chairs", label: "Chairs" },
          { value: "stools", label: "Stools" },
          { value: "chests", label: "Chests" },
          { value: "coffee_tables", label: "Coffee Tables" },
          { value: "console_tables", label: "Console Tables" },
          { value: "desks", label: "Desks" },
          { value: "meeting_rooms", label: "Meeting / Conference Rooms" },
          { value: "dining_tables", label: "Dining Tables" },
          { value: "display_cabinets", label: "Display Cabinets" },
          { value: "dresser", label: "Dresser / Closet / Armoire" },
          { value: "nightstands", label: "Night Stands" },
          { value: "office_furniture", label: "Office Furniture" },
          { value: "outdoor_furniture", label: "Outdoor Spaces Furniture" },
          { value: "patio_furniture", label: "Patio Furniture" },
          { value: "pedestals", label: "Pedestals" },
          { value: "seating_islands", label: "Seating Islands" },
          { value: "shelves", label: "Shelves / Cabinets / Bookshelves" },
          { value: "side_tables", label: "Side Tables" },
          { value: "sideboards", label: "Sideboards" },
          { value: "sofas", label: "Sofas" },
          { value: "storage", label: "Storage" },
          { value: "street_furniture", label: "Street Furniture" },
          { value: "tables", label: "Tables" },
          { value: "valuables_storage", label: "Valuables Storage / Safes" },
          { value: "wardrobes", label: "Wardrobes" },
          { value: "work_chairs", label: "Work Chairs" },
        ],
      },
      {
        value: "Lighting and Electrical",
        label: "Lighting and Electrical",
        subcategories: [
          { value: "awnings", label: "Awnings" },
          {
            value: "bulbs_spots_wall_lights",
            label: "Bulbs / Spots / Wall Lights",
          },
          { value: "floor_lamps", label: "Floor Lamps" },
          { value: "hanging_lamps", label: "Hanging Lamps" },
          { value: "lighting", label: "Lighting" },
          { value: "lights", label: "Lights" },
          { value: "switches", label: "Switches" },
          { value: "table_lamps", label: "Table Lamps" },
          { value: "wall_ceiling_lights", label: "Wall / Ceiling Lights" },
          { value: "window_shades_awnings", label: "Window Shades / Awnings" },
        ],
      },
      {
        value: "Architectural Elements and Systems",
        label: "Architectural Elements and Systems",
        subcategories: [
          { value: "beams_pillars", label: "Beams / Pillars" },
          { value: "bricks", label: "Bricks" },
          { value: "brickwork_masonry", label: "Brickwork / Masonry" },
          { value: "ceilings", label: "Ceilings" },
          { value: "concrete_systems", label: "Concrete Systems" },
          { value: "curtain_walls", label: "Curtain Walls" },
          { value: "doors_partitions", label: "Doors / Partitions" },
          {
            value: "elevators_conveying_equipment",
            label: "Elevators / Conveying Equipment",
          },
          {
            value: "enclosures_double_skin_facades",
            label: "Enclosures / Double Skin Facades",
          },
          { value: "facade_systems", label: "Facade Systems" },
          { value: "fasteners", label: "Fasteners" },
          { value: "floors", label: "Floors" },
          { value: "green_facades", label: "Green Facades" },
          { value: "green_roofs", label: "Green Roofs" },
          { value: "louvers_shutters", label: "Louvers / Shutters" },
          { value: "metal_framing_systems", label: "Metal Framing Systems" },
          { value: "partitions", label: "Partitions" },
          { value: "roofing", label: "Roofing" },
          { value: "stairs_railing", label: "Stairs / Railing" },
          { value: "suspension_systems", label: "Suspension Systems" },
          { value: "tensile_structures", label: "Tensile Structures" },
          { value: "walls", label: "Walls" },
          { value: "windows", label: "Windows" },
        ],
      },
      {
        value: "Materials and Finishes",
        label: "Materials and Finishes",
        subcategories: [
          { value: "adhesives_mortars", label: "Adhesives / Mortars" },
          { value: "aluminum_composites", label: "Aluminum Composites" },
          {
            value: "anti_corrosive_coatings",
            label: "Anti-Corrosive Coatings",
          },
          { value: "boards", label: "Boards" },
          { value: "ceramics", label: "Ceramics" },
          { value: "coatings_glazing", label: "Coatings / Glazing" },
          { value: "composites", label: "Composites" },
          { value: "concrete", label: "Concrete" },
          {
            value: "engineered_wood_flooring",
            label: "Engineered Wood Flooring",
          },
          {
            value: "fabric_textile_architecture",
            label: "Fabric / Textile Architecture",
          },
          { value: "fiber_cements_cements", label: "Fiber Cements / Cements" },
          { value: "finishes", label: "Finishes" },
          { value: "glass", label: "Glass" },
          { value: "glazed", label: "Glazed" },
          { value: "insulation", label: "Insulation" },
          {
            value: "laminated_wood_flooring",
            label: "Laminated Wood Flooring",
          },
          {
            value: "linoleum_vinyl_epoxy_urethane",
            label: "Linoleum / Vinyl / Epoxy / Urethane",
          },
          {
            value: "metal_chain_link_fencing",
            label: "Metal / Chain Link Fencing",
          },
          { value: "metals", label: "Metals" },
          {
            value: "mineral_organic_paints",
            label: "Mineral / Organic Paints",
          },
          { value: "paint", label: "Paint" },
          {
            value: "panels_prefabricated_assemblies",
            label: "Panels / Prefabricated Assemblies",
          },
          { value: "plastics_fibers", label: "Plastics / Fibers" },
          { value: "porcelain_stoneware", label: "Porcelain Stoneware" },
          { value: "rustic_ceramics", label: "Rustic Ceramics" },
          { value: "stones_masonry", label: "Stones / Masonry" },
          { value: "synthetics_asphalt", label: "Synthetics / Asphalt" },
          { value: "textures", label: "Textures" },
          { value: "thermal", label: "Thermal" },
          {
            value: "thermally_modified_wood",
            label: "Thermally Modified Wood",
          },
          { value: "tiles_mosaic_gresite", label: "Tiles / Mosaic / Gresite" },
          { value: "unglazed", label: "Unglazed" },
          { value: "vinyl_walls", label: "Vinyl Walls" },
          { value: "wallcovering_cladding", label: "Wallcovering / Cladding" },
          { value: "wallpaper", label: "Wallpaper" },
          { value: "wood", label: "Wood" },
          {
            value: "wood_boards_hpl_panels",
            label: "Wood Boards / HPL Panels",
          },
          { value: "wooden_flooring", label: "Wooden Flooring" },
        ],
      },
      {
        value: "Outdoor and Landscape",
        label: "Outdoor and Landscape",
        subcategories: [
          { value: "benches", label: "Benches" },
          { value: "tables", label: "Tables" },
          { value: "blinds", label: "Blinds" },
          { value: "mosquito_nets", label: "Mosquito Nets" },
          { value: "curtains", label: "Curtains" },
          { value: "bus_stop_shelters", label: "Bus Stop Shelters" },
          { value: "kiosks", label: "Kiosks" },
          { value: "fences", label: "Fences" },
          { value: "outdoor_lighting", label: "Outdoor Lighting" },
          { value: "planters", label: "Planters" },
          { value: "vegetation_protectors", label: "Vegetation Protectors" },
          { value: "pools", label: "Pools" },
          { value: "saunas", label: "Saunas" },
          { value: "street_furniture", label: "Street Furniture" },
          { value: "swings", label: "Swings" },
          { value: "urban_lighting", label: "Urban Lighting" },
          { value: "urban_pavements", label: "Urban Pavements" },
          { value: "urban_shading", label: "Urban Shading" },
        ],
      },
      {
        value: "Plumbing and HVAC",
        label: "Plumbing and HVAC",
        subcategories: [
          { value: "dishwasher", label: "Dishwashers" },
          { value: "washer", label: "Washers" },
          { value: "dryer", label: "Dryers" },
          { value: "faucet", label: "Faucets" },
          { value: "sink", label: "Sinks" },
          { value: "hvac", label: "Heating / Ventilation / Air Conditioning" },
          { value: "plumbing", label: "Plumbing" },
          { value: "shower_column", label: "Shower Columns" },
          { value: "shower_tray", label: "Shower Trays" },
          { value: "shower", label: "Showers" },
          { value: "toilet_bidet", label: "Toilets / Bidets" },
          { value: "toilet_urinal", label: "Toilets / Urinals" },
          { value: "urinal", label: "Urinals" },
          { value: "hvac", label: "Ventilation / Air Conditioning" },
          {
            value: "waste_container",
            label: "Waste Containers / Recycling Bins",
          },
          { value: "water_heating", label: "Water Heating" },
          { value: "waterproofing_sealant", label: "Waterproofing/Sealants" },
        ],
      },
      {
        value: "Technology and Equipment",
        label: "Technology and Equipment",
        subcategories: [
          { value: "automation", label: "Automation" },
          { value: "communications", label: "Communications" },
          {
            value: "connectivity_accessories",
            label: "Connectivity Accessories",
          },
          { value: "construction_equipment", label: "Construction Equipment" },
          { value: "digital_systems", label: "Digital Systems" },
          { value: "electrical_appliances", label: "Electrical Appliances" },
          { value: "home_automation", label: "Home Automation" },
          { value: "home_appliances", label: "Home Appliances" },
          { value: "mep_hvac", label: "MEP & HVAC" },
          { value: "renewable_energy", label: "Renewable Energy" },
          { value: "security", label: "Security" },
          { value: "technology", label: "Technology" },
        ],
      },
      {
        value: "Hardware and Fixtures",
        label: "Hardware and Fixtures",
        subcategories: [
          { value: "accessories", label: "Accessories / Joint Covers" },
          { value: "door_frames", label: "Door Frames" },
          { value: "drawers", label: "Drawers / Filing Cabinets / Shelves" },
          { value: "faucets", label: "Faucets" },
          { value: "handles", label: "Handles" },
          { value: "handshower", label: "Handshower" },
          { value: "hidden_joints", label: "Hidden Joints" },
          { value: "hinges", label: "Hinges" },
          { value: "hobs", label: "Hobs" },
          { value: "holders", label: "Holders" },
          { value: "hooks", label: "Hooks" },
          { value: "locks", label: "Locks" },
        ],
      },
      {
        value: "Miscellaneous",
        label: "Miscellaneous",
        subcategories: [
          { value: "acoustic", label: "Acoustic" },
          { value: "bars_wire_mesh", label: "Bars / Wire / Mesh" },
          { value: "carpets", label: "Carpets" },
          { value: "clothes_racks", label: "Clothes Racks" },
          { value: "decoration", label: "Decoration" },
          { value: "decorative_elements", label: "Decorative Elements" },
          { value: "educational", label: "Educational" },
        ],
      },
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
  {
    id: "Name",
    name: "Name",
    options: [],
  },
  {
    id: "Properties",
    name: "Properties",
    options: [
      { value: "acoustic_insulation", label: "Acoustic Insulation" },
      { value: "anti_corrosion", label: "Anti-Corrosion" },
      { value: "antibacterial", label: "Antibacterial" },
      { value: "certification", label: "Certification" },
      { value: "chemical_free", label: "Chemical Free" },
      { value: "decay_resistant", label: "Decay Resistant" },
      { value: "energy_efficiency", label: "Energy Efficiency" },
      { value: "fireproof", label: "Fireproof" },
      { value: "insect_resistant", label: "Insect Resistant" },
      { value: "natural", label: "Natural" },
      { value: "non_slip", label: "Non-Slip" },
      { value: "recycled_material", label: "Recycled Material" },
      { value: "recycled_plastic", label: "Recycled Plastic" },
      { value: "security", label: "Security" },
      { value: "solar_control", label: "Solar Control" },
      { value: "stainless_rust_proof", label: "Stainless / Rust Proof" },
      { value: "synthetic", label: "Synthetic" },
      { value: "thermal_insulation", label: "Thermal Insulation" },
      { value: "thermally_modified", label: "Thermally Modified" },
      { value: "uv_protection", label: "UV Protection" },
      { value: "waterproof", label: "Waterproof" },
    ],
  },
  {
    id: "Application",
    name: "Application",
    options: [
      { value: "Structural Components", label: "Structural Components" },
      { value: "flooring_tiling", label: "Flooring & Tiling" },
      {
        value: "insulation_waterproofing",
        label: "Insulation & Waterproofing",
      },
      { value: "roofing_materials", label: "Roofing Materials" },
      { value: "windows_doors", label: "Windows & Doors" },
      { value: "interior_finishes", label: "Interior Finishes" },
      { value: "landscaping_materials", label: "Landscaping Materials" },
      { value: "electrical_systems", label: "Electrical Systems" },
      { value: "plumbing_systems", label: "Plumbing Systems" },
      { value: "facades_cladding", label: "Facades & Cladding" },
      { value: "heating_cooling_systems", label: "Heating & Cooling Systems" },
      { value: "paints_coatings", label: "Paints & Coatings" },
      { value: "safety_security_systems", label: "Safety & Security Systems" },
      { value: "lighting_solutions", label: "Lighting Solutions" },
      { value: "acoustical_solutions", label: "Acoustical Solutions" },
    ],
  },

  {
    id: "Materials",
    name: "Materials",
    options: [
      { value: "aluminum", label: "Aluminum" },
      { value: "bamboo", label: "Bamboo" },
      { value: "brick", label: "Brick" },
      { value: "ceramic", label: "Ceramic" },
      { value: "composite_materials", label: "Composite materials" },
      { value: "concrete", label: "Concrete" },
      { value: "fabric", label: "Fabric" },
      { value: "fiberglass", label: "Fiberglass" },
      { value: "fibre_cement", label: "Fibre cement" },
      { value: "glass", label: "Glass" },
      { value: "granite", label: "Granite" },
      { value: "ice", label: "Ice" },
      { value: "limestone", label: "Limestone" },
      { value: "marble", label: "Marble" },
      { value: "metal", label: "Metal" },
      { value: "paper", label: "Paper" },
      { value: "plaster", label: "Plaster" },
      { value: "plasterboard", label: "Plasterboard" },
      { value: "plastic", label: "Plastic" },
      { value: "policarbonato", label: "Policarbonato" },
      { value: "polypropylene", label: "Polypropylene" },
      { value: "porcelain", label: "Porcelain" },
      { value: "quartz", label: "Quartz" },
      { value: "rammed_earth", label: "Rammed Earth" },
      { value: "recycled_material", label: "Recycled material" },
      { value: "resin", label: "Resin" },
      { value: "sandstone", label: "Sandstone" },
      { value: "slate", label: "Slate" },
      { value: "stainless_steel", label: "Stainless steel" },
      { value: "steel", label: "Steel" },
      { value: "stone", label: "Stone" },
      { value: "terracotta", label: "Terracotta" },
      { value: "wallpaper", label: "Wallpaper" },
      { value: "wood", label: "Wood" },
      { value: "wood_based_panels", label: "Wood-based panels" },
    ],
  },
];

export const ProductFilter = () => {
  return (
    <div className="py-5 lg:py-10">
      <span className="text-lg text-gray-400 font-bold">Search projects</span>
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
                        {section.id === "type" ? (
                          <Disclosure
                            as="div"
                            className="w-full"
                            key={option.value}
                          >
                            {({ open }) => (
                              <>
                                <h3 className="-my-2 lg:my-0 lg:flow-root">
                                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-2 lg:py-2 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-normal text-start text-gray-900">
                                      {option.label}
                                    </span>
                                    <span className="ml-4 flex items-center">
                                      {open ? (
                                        <MinusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <PlusIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-3 lg:pt-6">
                                  <div className="space-y-3">
                                    {option.subcategories.map(
                                      (subcategory, subIdx) => (
                                        <div
                                          key={subcategory.value}
                                          className="flex items-center ml-6"
                                        >
                                          <input
                                            id={`filter-${option.value}-${subIdx}`}
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                                          />
                                          <label
                                            htmlFor={`filter-${option.value}-${subIdx}`}
                                            className="ml-3 text-sm lg:text-md font-normal text-gray-600"
                                          >
                                            {subcategory.label}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ) : (
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
