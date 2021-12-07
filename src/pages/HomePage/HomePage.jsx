import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection";
import ProductsSection from "./ProductsSection";
import AboutUs from "./../../frames/AboutUs";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <HeroSection />
      <ShopSection />
      <ProductsSection />
      <AboutUs />
    </main>
  );
};

export default HomePage;
