import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import PublishButton from "../components/common/PublishButton";
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
      </div>
      <PublishButton />
    </div>
  );
};

export default Products;
