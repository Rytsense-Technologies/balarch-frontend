const PagesHeading = ({ title, subtitle, description }) => {
  return (
    <>
      <div className="py-5 flex flex-col text-center w-full mb-5">
        <div className="flex items-center justify-center">
          <div className="text-4xl border-r border-gray-400 pr-4">{title}</div>
          <div className="text-gray-500 font-semibold pl-4">{subtitle}</div>
        </div>
        <p className="lg:w-2/3  mt-5 mx-auto leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </>
  );
};

export default PagesHeading;
