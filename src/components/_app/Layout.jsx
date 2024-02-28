import Footer from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};
