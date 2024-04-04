import React from "react";
import PublishButton from "../components/common/PublishButton";
const ProductItemPage = () => {
  const handleDownloadPdf = () => {
    const dummyPdfUrl = "https://clickdimensions.com/links/TestPDFfile.pdf";
    const link = document.createElement("a");
    link.href = dummyPdfUrl;
    link.download = "dummy.pdf";
    link.click();
  };
  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center">
        <img
          className="h-32 w-32 bg-white p-2 rounded-full"
          src="https://cass-files.s3.us-east-2.amazonaws.com/pexels-pixabay-159866.jpg"
          alt=""
        />
        <div className="text-2xl border-r border-gray-400 pr-4">
          SoundGuard Fabric-Encased Bricks
        </div>
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={handleDownloadPdf}
        >
          DOWNLOAD PDF
        </button>
        <div className=" px-80 flex flex-col items-center justify-center">
          <div className="px-4">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Product Information
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100 text-center">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Category
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Materials and Finishes
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Properties
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Acoustic Insulation, Anti-Corrosion, Antibacterial,
                  Certification, Chemical Free, Decay Resistant, Energy
                  Efficiency,
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Applications
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Insulation & Waterproofing
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Certifications
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ISO 9001 (Quality Management)
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Materials
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Aluminum, Bamboo, Brick, Ceramic, Composite materials,
                  Concrete, Fabric, Fiberglass, Fibre cement, Glass, Granite,
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <PublishButton />
    </>
  );
};

export default ProductItemPage;
