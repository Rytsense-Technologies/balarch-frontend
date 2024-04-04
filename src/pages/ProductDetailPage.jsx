import { BsHeart } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { useLocation } from "react-router";
import PublishButton from "../components/common/PublishButton";
import ProductInfoCards from "./../components/product/productdetail/ProductInfoCards";
import RelatedProducts from "./../components/product/productdetail/RelatedProducts";
import RelatedCollaborators from "./../components/professionals/professionaldetail/RelatedCollaborators";
const ProductDetailPage = () => {
  const location = useLocation();
  const { productDetails } = location.state;
  return (
    <>
      <div className="transform duration-200 easy-in-out">
        <div className=" h-52 overflow-hidden">
          <img
            className="w-full"
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/centro-para-la-cultura-y-las-artes-de-la-ribera-ars-degrees-atelier-de-arquitecturas_18.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5 -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full"
            src={productDetails.Image1Main}
            alt=""
          />
        </div>

        <div className="px-14 py-10">
          <div className="flex items-center justify-center">
            <div className="text-2xl border-r border-gray-400 pr-4">
              {productDetails.ProductName}
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
              <BsHeart />
              <FiAlertCircle />
            </div>
          </div>
        </div>

        <div className="lg:px-60 flex mb-10 justify-center">
          <span>
            Bricks are a type of building material typically made of concrete,
            sand, lime, or clay. They are generally used to construct walls,
            pavements, and other types of architecture. Bricks can be produced
            in a variety of shapes and types depending on the materials used to
            make them and the use for which they are intended.
          </span>
        </div>

        <ProductInfoCards />
        <RelatedProducts />

        <RelatedCollaborators />
        <PublishButton />
      </div>
    </>
  );
};

export default ProductDetailPage;
