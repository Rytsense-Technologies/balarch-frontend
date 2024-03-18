import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ScrollToTop from "./components/_app/ScrollToTop";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <Router />
    </>
  );
}

export default App;
