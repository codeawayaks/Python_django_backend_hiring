import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Root from "./pages/Root";
import ProductAddSuccess from "./pages/ProductAddSuccess";
import StockUpdateSuccess from "./pages/StockUpdateSuccess";
import CreateProduct from "./components/CreateProduct";
import StockUpdate from "./components/StockUpdate";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/createProduct":
        title = "";
        metaDescription = "";
        break;
      case "/stockUpdate":
        title = "";
        metaDescription = "";
        break;        
      case "/productaddsuccess":
        title = "";
        metaDescription = "";
        break;
      case "/stockupdatesuccess":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" element={<Root />} />
      <Route path="/productaddsuccess" element={<ProductAddSuccess />} />
      <Route path="/stockupdatesuccess" element={<StockUpdateSuccess />} />
      <Route path="/createProduct" element={<CreateProduct />} />
      <Route path="/stockUpdate" element={<StockUpdate />} />
    </Routes>
  );
}
export default App;
