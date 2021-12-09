import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Button from "./components/Button";
import LinkButton from "./components/LinkButton";
import NumberStep from "./components/NumberStep";
import Navbar from "./frames/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import HeadphonesCategoryPage from "./pages/CategoryPages/HeadphonesCategoryPage";
import EarphonesCategoryPage from "./pages/CategoryPages/EarphonesCategoryPage";
import SpeakersCategoryPage from "./pages/CategoryPages/SpeakersCategoryPage";
import XX99M2DetailPage from "./pages/ProductDetailPages/XX99M2DetailPage";
import XX99M1DetailPage from "./pages/ProductDetailPages/XX99M1DetailPage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="headphones/" element={<HeadphonesCategoryPage />} />
        <Route path="headphones/xx99m2" element={<XX99M2DetailPage />} />
        <Route path="headphones/xx99m1" element={<XX99M1DetailPage />} />

        <Route path="earphones" element={<EarphonesCategoryPage />} />
        <Route path="speakers" element={<SpeakersCategoryPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
