import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/images/loader.gif";
import { getProductDetails } from "../../service/PrivateService";
import { getAllProducts } from "./../../service/PublicService";
import { ProductFilter } from "./ProductFilter";

const ProductList = () => {
  const navigate = useNavigate();
  const items = Array.from({ length: 10 });

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const projectsData = await getAllProducts();
        setProducts(projectsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = async (ProductId) => {
    try {
      const productDetails = await getProductDetails(ProductId);
      navigate(`/product/${ProductId}`, {
        state: { productDetails },
      });
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  console.log(products);

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 lg:grid-cols-8 lg:px-40">
      <div className="lg:col-span-2">
        <ProductFilter />
      </div>

      <div className="lg:col-span-6">
        <div className="mb-5">
          <div className="flex  items-center">
            <div className="text-4xl border-r border-gray-400 pr-4">
              Categories
            </div>
            <div className="text-gray-500 font-semibold pl-4">
              50 suppliers found
            </div>
          </div>
        </div>
        <hr />
        <div className="text-gray-500 text-sm font-semibold mt-2">
          REGISTERED PROJECTS
        </div>
        {loading && (
          <div className="flex justify-center ">
            <img src={loader} />
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-screen">
            <img
              src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
              alt="Centered Image"
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => navigateToProductDetail(product.ProductId)}
            >
              <img
                className="rounded-full my-5 mx-5 shadow-lg w-36 h-36"
                src={product.Image1Main}
                alt="Extra large avatar"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <div className="text-xl border-r font-semibold border-gray-400 pr-4">
                    {product.ProductName}
                  </div>
                  <div className="text-gray-500 font-semibold pl-4">
                    Architecture
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris volutpat suscipit elit ac euismod. Curabitur sed erat
                  sit amet neque viverra tempus.
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CiLocationOn />
                    <span>Guadalajara</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsStack />
                    <span>+500 products</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsBuildings />
                    <span>Construction</span>
                  </div>
                </div>
                <div className="flex w-full md:w-auto gap-4 my-5">
                  <button className="flex flex-row border border-gray-800 rounded-lg p-2 items-center gap-2">
                    Keep <MdFavoriteBorder />
                  </button>
                  <Button variant="filled" size="sm">
                    View profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-xl py-5 gap-4 cursor-pointer">
          <FaArrowLeft /> 1/5 <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
