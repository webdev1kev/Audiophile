import zX9SpeakerMobile from "./../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zX7SpeakerMobile from "./../../assets/product-zx7-speaker/mobile/image-product.jpg";

import Product from "./../../frames/Product";
import Shop from "./../../frames/Shop";
import AboutUs from "./../../frames/AboutUs";
import Footer from "./../../frames/Footer";

const SpeakersCategoryPage = () => {
  return (
    <main>
      <h4 className="category-heading">Speakers</h4>
      <Product
        newProduct={true}
        image={zX9SpeakerMobile}
        alt="ZX9 Speaker"
        link="/speakers/zx9"
      >
        <h4>ZX9 Speaker</h4>
        <p>
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity --
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
      </Product>
      <Product image={zX7SpeakerMobile} alt="ZX7 Speaker" link="/speakers/zx7">
        <h4>ZX7 Speaker</h4>
        <p>
          Stream high quality sound wirelessly with minimal loss. The ZX7
          bookshelf speaker uses high-end audiophile components that represents
          the top of the line powered speakers for home or studio use.
        </p>
      </Product>
      <Shop />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default SpeakersCategoryPage;
