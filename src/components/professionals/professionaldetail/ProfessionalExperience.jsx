import { useState } from "react";

const ProfessionalExperience = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
  ]);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(experiences.length);
  };
  return (
    <>
      <div className="lg:px-60 mt-10">
        <div className="bg-gray-200 flex flex-wrap">
          <div className="w-full lg:w-1/2 p-6">
            <div className="flex items-center mb-5 gap-6">
              <h1 className="font-bold">Experiencia</h1>
              {experiences.length > visibleCount && (
                <button
                  onClick={handleLoadMore}
                  className="border border-gray-800 text-gray-900 font-medium py-1 px-2 rounded"
                >
                  View all
                </button>
              )}
            </div>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto">
                {experiences.slice(0, visibleCount).map((experience, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="font-bold text-gray-900 mb-1 text-md">
                      {experience.title}
                    </h2>
                    <p className="leading-relaxed">
                      {experience.company} {experience.duration}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <div className="flex items-center mb-5 gap-6">
              <h1 className="font-bold">Experiencia</h1>
              {experiences.length > visibleCount && (
                <button
                  onClick={handleLoadMore}
                  className="border border-gray-800 text-gray-900 font-medium py-1 px-2 rounded"
                >
                  View all
                </button>
              )}
            </div>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto">
                {experiences.slice(0, visibleCount).map((experience, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="font-bold text-gray-900 mb-1 text-md">
                      {experience.title}
                    </h2>
                    <p className="leading-relaxed">
                      {experience.company} {experience.duration}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalExperience;
