import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./frames/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import HeadphonesCategoryPage from "./pages/CategoryPages/HeadphonesCategoryPage";
import EarphonesCategoryPage from "./pages/CategoryPages/EarphonesCategoryPage";
import SpeakersCategoryPage from "./pages/CategoryPages/SpeakersCategoryPage";

import XX99M2DetailPage from "./pages/ProductDetailPages/XX99M2DetailPage";
import XX99M1DetailPage from "./pages/ProductDetailPages/XX99M1DetailPage";
import XX59DetailPage from "./pages/ProductDetailPages/XX59DetailPage";
import YX1DetailPage from "./pages/ProductDetailPages/YX1DetailPage";
import ZX7DetailPage from "./pages/ProductDetailPages/ZX7DetailPage";
import ZX9DetailPage from "./pages/ProductDetailPages/ZX9DetailPage";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="headphones/" element={<HeadphonesCategoryPage />} />
        <Route path="headphones/xx99m2" element={<XX99M2DetailPage />} />
        <Route path="headphones/xx99m1" element={<XX99M1DetailPage />} />
        <Route path="headphones/xx59" element={<XX59DetailPage />} />

        <Route path="speakers" element={<SpeakersCategoryPage />} />
        <Route path="speakers/zx7" element={<ZX7DetailPage />} />
        <Route path="speakers/zx9" element={<ZX9DetailPage />} />

        <Route path="earphones" element={<EarphonesCategoryPage />} />
        <Route path="earphones/yx1" element={<YX1DetailPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
