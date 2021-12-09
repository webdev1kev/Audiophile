import HeroSection from "./HeroSection";
import Shop from "../../frames/Shop";
import ProductsSection from "./ProductsSection";
import AboutUs from "./../../frames/AboutUs";
import Footer from "./../../frames/Footer";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <HeroSection />
      <Shop />
      <ProductsSection />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default HomePage;
