import yX1EarphonesMobile from "./../../assets/product-yx1-earphones/mobile/image-product.jpg";

import Product from "../../frames/Product";
import Shop from "../../frames/Shop";
import AboutUs from "../../frames/AboutUs";
import Footer from "../../frames/Footer";

const EarphonesCategoryPage = () => {
  return (
    <main>
      <h4 className="category-heading">Earphones</h4>
      <Product
        newProduct={true}
        image={yX1EarphonesMobile}
        alt="YX1 Wireless Earphones"
        link="/earphones/yx1"
      >
        <h4>YX1 Wireless Earphones</h4>
        <p className="paragraph">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
      </Product>
      <Shop />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default EarphonesCategoryPage;
