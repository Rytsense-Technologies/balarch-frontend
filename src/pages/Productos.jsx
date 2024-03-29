import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import ProductCards from "../components/product/ProductCards";
import ProductList from "../components/product/ProductList";

const Products = () => {
  return (
    <div className="py-5">
      <PagesHeading
        title={"Products"}
        subtitle={"967 registered products"}
        description={
          "Find suppliers and distributors of products in the construction sector in the specialized directory Balarch. The best brands and suppliers of construction materials for your architectural project."
        }
      />
      <ProductCards />
      <ProductList />
      <div className="bg-gray-200 py-5 lg:px-40">
        <ExploreProjects />
        <div className="flex flex-col lg:flex-row px-5 items-center justify-center gap-4 py-20">
          <div className="bg-gray-900 h-[10rem] w-full max-w-[25rem] flex">
            <div>
              <img
                className="h-[11rem] w-full max-w-[25rem] mx-auto -my-5"
                src="https://s3-alpha-sig.figma.com/img/4b64/6736/09e6771c19d8435839d60338141dfc4e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O8iRQjAVDSgfEuWPFULLeJTOueHgIISwPg1VM-9IH-MOeINBQr4R6FeIv7TBofKFsjnCRAp4D0e9mG7NU7XmOOV3cscEI~gH7kw1YUfKaRCqNnFdCSJ1DXpRxWQqD26GwE3Uc9kR4acixjWo5eMV0FVpFvXtEuwUTfIY9V4trjyIjNxyZJC-f8td0nxADWWRhEEFJpC0eplXhXeVDxMdylY1zEaJ64GZ9E0UXudDHweF13fFe17WD8NFk7~F1DY8ehvhV08Rt4hOtjYFAQvyduUIzQsytFjv~9UZXJdpWiVhQmX8zuOKefFeUw4hXVm~Oyio7ZeHLqcMz77FB4u1Bw__"
              />
            </div>
            <div className="text-white px-5 flex flex-col justify-center">
              <span className="text-sm">professional directory</span>
              <h1 className="text-3xl">Create your Commercial profile</h1>
              <span className="text-sm">Free Registration</span>
            </div>
          </div>
          <div className="bg-gray-500 h-[10rem] w-full max-w-[25rem]">
            <div className="text-white px-5 flex justify-center">
              <span className="text-sm py-20">Sponsor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
