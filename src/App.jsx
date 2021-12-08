import { Fragment } from "react";

import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import NumberStep from "./components/NumberStep";
import Navbar from "./frames/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/CategoryPage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <ProductPage />
    </Fragment>
  );
};

export default App;
