import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import ProductCards from "../components/product/ProductCards";
import ProductList from "../components/product/ProductList";

const Productos = () => {
  return (
    <div className="py-5">
      <PagesHeading
        title={"Productos"}
        subtitle={"967 productos registrados"}
        description={
          "Encuentra proveedores y distribuidores de productos del sector de la construcción en el directorio especializado Balarch. Las mejores marcas y proveedores de materiales para la construcción para tu proyecto arquitectónico."
        }
      />
      <ProductCards />
      <ProductList />
      <div className="bg-gray-200 py-5 lg:px-40">
        <ExploreProjects />
      </div>
    </div>
  );
};

export default Productos;
