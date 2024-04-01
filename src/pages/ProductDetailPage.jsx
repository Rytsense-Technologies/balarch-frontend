import { BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation } from "react-router";
import PatrocinosCards from "../components/common/PatrocinosCards";
import RelatedProfessionals from "../components/product/productdetail/RelatedProfessionals";
import ProductInfoCards from "./../components/product/productdetail/ProductInfoCards";
import RelatedProducts from "./../components/product/productdetail/RelatedProducts";
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
            src="https://s3-alpha-sig.figma.com/img/aa7d/3134/91b893ff59b70b782d3aa6668ce1cc2a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRikz-gU5vVhF5BOGVq4JYuk1PQteSve6ALlsDGokHxVZG54eYwV0RnoYlu2Y9kJhXHkoDxT~9apbfT3j2pdDSTtqPbSfKrSAL8KIJ4K7EkINx9d2PWilC4BcSEcwO5wFEMUMF6jwn~cG0AJ62yiDarvmHL8uSmZdYaIRiK6GFBszF63xYUEa9BXnx6FvAxW6lS1Cx1u~EVFQzIcproubdx-DZKVJcfWEY8uv7aY2XU3DfiNUsaHupqQknnkt-U2zm9Uqh9EWDnh5fymC7VFd0a7JYBhR9vIGFvx1G4xg9t0yY3VfO6~0nqSLlnvJFCjAWlAEs06Nhfcj3ogBnr6yg__"
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
              <FiSend />
            </div>
          </div>
        </div>

        <div className="lg:px-60 flex flex-col gap-6 px-5 text-center justify-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat suscipit elit ac euismod. Curabitur sed erat sit amet neque
            viverra tempus sed ac arcu. Suspendisse dignissim nunc sed nibh
            facilisis fringilla. Proin at massa sit amet nisl eleifend
            elementum. In vel lectus consequat, molestie nibh molestie,
            ultricies tortor. Praesent quis consectetur nisi, non scelerisque
            augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
            Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
            arcu at lacinia molestie. Etiam at pellentesque justo.
          </span>
        </div>

        <ProductInfoCards />
        <RelatedProducts />
        <RelatedProfessionals />
      </div>
      <PatrocinosCards />
    </>
  );
};

export default ProductDetailPage;
