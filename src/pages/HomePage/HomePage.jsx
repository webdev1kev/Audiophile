import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection";
import ProductsSection from "./ProductsSection";
import AboutUs from "./../../frames/AboutUs";
import Footer from "./../../frames/Footer";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <HeroSection />
      <ShopSection />
      <ProductsSection />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default HomePage;
