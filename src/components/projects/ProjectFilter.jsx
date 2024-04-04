import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

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
    id: "typology",
    name: "Typology",
    options: [
      {
        value: "Residential",
        label: "Residential",
        subcategories: [
          { value: "single_family_home", label: "Single-Family Homes" },
          {
            value: "apartment_multi_family",
            label: "Apartments & Multi-Family Housing",
          },
          { value: "housing_development", label: "Housing Developments" },
          { value: "affordable_housing", label: "Affordable Housing" },
          { value: "luxury_residence", label: "Luxury Residences" },
          {
            value: "adaptive_reuse_residential",
            label: "Adaptive Reuse Residential",
          },
          { value: "co_housing_community", label: "Co-Housing Communities" },
          {
            value: "senior_living_facility",
            label: "Senior Living Facilities",
          },
          { value: "student_dormitory", label: "Student Dormitories" },
          { value: "micro_apartment", label: "Micro-Apartments" },
          { value: "mixed_use_development", label: "Mixed-Use Developments" },
          { value: "townhouse", label: "Townhouses" },
        ],
      },
      {
        value: "Commercial & Retail",
        label: "Commercial & Retail",
        subcategories: [
          { value: "office_building", label: "Office Building" },
          { value: "retail_space", label: "Retail Space" },
          { value: "mixed_use_development", label: "Mixed-Use Development" },
          { value: "shopping_center", label: "Shopping Center" },
          { value: "hospitality", label: "Hospitality (Hotels & Resorts)" },
          { value: "restaurant_cafe", label: "Restaurant & Cafe" },
          { value: "corporate_headquarters", label: "Corporate Headquarters" },
          { value: "retail_store", label: "Retail Store" },
          { value: "big_box_retailer", label: "Big-Box Retailer" },
          { value: "pop_up_shop", label: "Pop-Up Shop" },
          { value: "ecommerce_warehouse", label: "E-commerce Warehouse" },
        ],
      },
      {
        value: "Cultural & Civic",
        label: "Cultural & Civic",
        subcategories: [
          {
            value: "museums_cultural_centers",
            label: "Museums & Cultural Centers",
          },
          {
            value: "theaters_performing_arts_centers",
            label: "Theaters & Performing Arts Centers",
          },
          { value: "libraries", label: "Libraries" },
          { value: "civic_buildings", label: "Civic Buildings" },
          {
            value: "educational_institutions",
            label: "Educational Institutions",
          },
          { value: "religious_buildings", label: "Religious Buildings" },
          { value: "exhibition_halls", label: "Exhibition Halls" },
          { value: "government_offices", label: "Government Offices" },
          {
            value: "international_embassies",
            label: "International Embassies",
          },
          {
            value: "nonprofit_organizations",
            label: "Nonprofit Organizations",
          },
          { value: "cultural_institutes", label: "Cultural Institutes" },
        ],
      },
      {
        value: "Industrial & Manufacturing Architecture",
        label: "Industrial & Manufacturing Architecture",
        subcategories: [
          { value: "factory", label: "Factory" },
          { value: "warehouse", label: "Warehouse" },
          { value: "industrial_park", label: "Industrial Park" },
          {
            value: "research_facility",
            label: "Research & Development Facility",
          },
          { value: "industrial_renovation", label: "Industrial Renovation" },
          { value: "auto_assembly_plant", label: "Auto Assembly Plant" },
          { value: "steel_mill", label: "Steel Mill" },
          { value: "chemical_factory", label: "Chemical Factory" },
          { value: "textile_mill", label: "Textile Mill" },
          { value: "printing_press", label: "Printing Press" },
        ],
      },
      {
        value: "Healthcare & Wellness Architecture",
        label: "Healthcare & Wellness Architecture",
        subcategories: [
          { value: "hospital", label: "Hospital" },
          { value: "clinic", label: "Healthcare Clinic" },
          { value: "wellness_center", label: "Wellness Center & Spa" },
          { value: "rehab_facility", label: "Rehabilitation Facility" },
          { value: "nursing_home", label: "Nursing Home" },
          { value: "mental_health_facility", label: "Mental Health Facility" },
          { value: "yoga_wellness_center", label: "Yoga & Wellness Center" },
          { value: "veterinary_clinic", label: "Veterinary Clinic" },
          { value: "research_center", label: "Health Research Center" },
          { value: "insurance_office", label: "Health Insurance Office" },
          { value: "gym_studio", label: "Fitness Gym & Studio" },
          { value: "pharmacy", label: "Pharmacy" },
        ],
      },
      {
        value: "Public Infrastructure & Civic Buildings",
        label: "Public Infrastructure & Civic Buildings",
        subcategories: [
          [
            { value: "airport", label: "Airport" },
            { value: "train_station", label: "Train Station" },
            { value: "bus_terminal", label: "Bus Terminal" },
            { value: "bridge", label: "Bridge" },
            { value: "highway", label: "Highway" },
            { value: "port", label: "Port" },
            { value: "harbor", label: "Harbor" },
            { value: "energy_infrastructure", label: "Energy Infrastructure" },
            {
              value: "utility_infrastructure",
              label: "Utility Infrastructure",
            },
            { value: "park", label: "Park" },
            { value: "plaza", label: "Plaza" },
            { value: "public_space", label: "Public Space" },
            { value: "auditorium", label: "Auditorium" },
            { value: "toll_booth", label: "Toll Booth" },
            {
              value: "disaster_response_center",
              label: "Disaster Response Center",
            },
          ],
        ],
      },
      {
        value: "Historical & Heritage Architecture",
        label: "Historical & Heritage Architecture",
        subcategories: [
          {
            value: "historic_preservation_renovation",
            label: "Historic Preservation & Renovation",
          },
          {
            value: "heritage_sites_landmarks",
            label: "Heritage Sites & Landmarks",
          },
          {
            value: "adaptive_reuse_historic_buildings",
            label: "Adaptive Reuse of Historic Buildings",
          },
          {
            value: "museums_interpretive_centers",
            label: "Museums & Interpretive Centers",
          },
          { value: "archaeological_museums", label: "Archaeological Museums" },
          { value: "monument_conservation", label: "Monument Conservation" },
          {
            value: "indigenous_cultural_centers",
            label: "Indigenous Cultural Centers",
          },
          {
            value: "lighthouse_preservation",
            label: "Lighthouse Preservation",
          },
          { value: "castle_preservation", label: "Castle Preservation" },
          {
            value: "underwater_archaeological_sites",
            label: "Underwater Archaeological Sites",
          },
          {
            value: "indigenous_reservations",
            label: "Indigenous Reservations",
          },
        ],
      },
      {
        value: "Recreation & Sports Architecture",
        label: "Recreation & Sports Architecture",
        subcategories: [
          { value: "sports_stadium", label: "Sports Stadiums & Arenas" },
          { value: "recreation_center", label: "Recreation Centers & Gyms" },
          { value: "sports_complex", label: "Sports Complexes" },
          { value: "stadium_renovation", label: "Stadium Renovations" },
          {
            value: "outdoor_sports_facility",
            label: "Outdoor Sports Facilities",
          },
          { value: "fitness_club", label: "Fitness Clubs & Gyms" },
          { value: "tennis_court", label: "Tennis Courts" },
          { value: "golf_course", label: "Golf Courses" },
          { value: "ice_rink", label: "Ice Rinks" },
          { value: "community_pool", label: "Community Pools" },
          { value: "hiking_trail", label: "Hiking & Outdoor Trails" },
          {
            value: "sports_training_facility",
            label: "Sports Training Facilities",
          },
        ],
      },
      {
        value: "Environmental & Sustainable Architecture",
        label: "Environmental & Sustainable Architecture",
        subcategories: [
          { value: "green_building_design", label: "Green Building Design" },
          { value: "sustainable_housing", label: "Sustainable Housing" },
          { value: "eco_tourism_facilities", label: "Eco-Tourism Facilities" },
          {
            value: "renewable_energy_installations",
            label: "Renewable Energy Installations",
          },
          {
            value: "leed_certified_buildings",
            label: "LEED-Certified Buildings",
          },
          { value: "sustainable_farms", label: "Sustainable Farms" },
          {
            value: "conservation_research_stations",
            label: "Conservation Research Stations",
          },
          {
            value: "environmental_education_centers",
            label: "Environmental Education Centers",
          },
          { value: "eco_tourism_lodges", label: "Eco-Tourism Lodges" },
        ],
      },
      {
        value: "Urban Planning & Master Planning",
        label: "Urban Planning & Master Planning",
        subcategories: [
          {
            value: "urban_development_projects",
            label: "Urban Development Projects",
          },
          { value: "master_plans", label: "Master Plans for Cities & Regions" },
          {
            value: "transit_oriented_developments",
            label: "Transit-Oriented Developments",
          },
          {
            value: "sustainable_urban_planning",
            label: "Sustainable Urban Planning",
          },
          { value: "mixed_use_urban_design", label: "Mixed-Use Urban Design" },
          { value: "city_planning", label: "City Planning" },
          { value: "town_city_hall", label: "Town & City Hall" },
          { value: "urban_design", label: "Urban Design" },
        ],
      },
      {
        value: "Interior Design & Interiors",
        label: "Interior Design & Interiors",
        subcategories: [
          { value: "residential", label: "Residential Interiors" },
          { value: "commercial", label: "Commercial Interiors" },
          { value: "hospitality", label: "Hospitality Interiors" },
          { value: "workplace", label: "Workplace Interiors" },
          { value: "retail", label: "Retail Interiors" },
          { value: "exhibition", label: "Exhibition Design" },
        ],
      },
      {
        value: "Landscape Architecture & Design",
        label: "Landscape Architecture & Design",
        subcategories: [
          { value: "parks", label: "Parks" },
          { value: "gardens", label: "Gardens" },
          { value: "urban_landscapes", label: "Urban Landscapes" },
          { value: "landscape_restoration", label: "Landscape Restoration" },
          { value: "sustainable_landscapes", label: "Sustainable Landscapes" },
          { value: "botanical_gardens", label: "Botanical Gardens" },
          {
            value: "nature_interpretation_centers",
            label: "Nature Interpretation Centers",
          },
          {
            value: "national_parks_visitor_centers",
            label: "National Parks Visitor Centers",
          },
          { value: "urban_greening", label: "Urban Greening" },
        ],
      },
      {
        value: "Temporary & Installation Architecture",
        label: "Temporary & Installation Architecture",
        subcategories: [
          {
            value: "art",
            label: "Art Installation",
          },
          {
            value: "pop-up",
            label: "Pop-Up Structure",
          },
          {
            value: "pavilion",
            label: "Temporary Pavilion",
          },
          {
            value: "exhibition",
            label: "Exhibition Design",
          },
          {
            value: "festival",
            label: "Festival Architecture",
          },
        ],
      },
      {
        value: "Emerging & Experimental Architecture",
        label: "Emerging & Experimental Architecture",
        subcategories: [
          { value: "Cutting-Edge Design", label: "Cutting-Edge Design" },
          {
            value: "Experimental Structures",
            label: "Experimental Structures",
          },
          {
            value: "Conceptual Architecture",
            label: "Conceptual Architecture",
          },
          {
            value: "Research-Based Projects",
            label: "Research-Based Projects",
          },
          {
            value: "Forward-Looking Innovations",
            label: "Forward-Looking Innovations",
          },
        ],
      },
      {
        value: "Sustainability & Green Building",
        label: "Sustainability & Green Building",
        subcategories: [
          { value: "Zero-Energy Buildings", label: "Zero-Energy Buildings" },
          { value: "Passive House Design", label: "Passive House Design" },
          { value: "Sustainable Materials", label: "Sustainable Materials" },
          { value: "Green Technologies", label: "Green Technologies" },
          {
            value: "Sustainable Community Planning",
            label: "Sustainable Community Planning",
          },
        ],
      },
    ],
  },
  {
    id: "size",
    name: "Year",
    options: [{ value: "2l", label: "2002" }],
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
];

const ProjectFilter = () => {
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
                        {section.id === "typology" ? (
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

export default ProjectFilter;
