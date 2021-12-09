import Product from "./../../frames/Product";

import xx99M1Mobile from "./../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx99M2Mobile from "./../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx59Mobile from "./../../assets/product-xx59-headphones/mobile/image-product.jpg";

import Shop from "./../../frames/Shop";
import AboutUs from "./../../frames/AboutUs";
import Footer from "../../frames/Footer";
const HeadphonesCategoryPage = () => {
  return (
    <main>
      <h4 className="category-heading">Headphones</h4>
      <Product
        newProduct={true}
        image={xx99M2Mobile}
        alt="XX99 Mark 2 Headphones"
        link="/headphones/xx99m2"
      >
        <h4>XX99 Mark II Headphones</h4>
        <p className="paragraph">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Product
        image={xx99M1Mobile}
        alt="XX99 Mark 1 Headphones"
        link="/headphones/xx99m1"
      >
        <h4>XX59 Headphones</h4>
        <p className="paragraph">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
      </Product>
      <Product image={xx59Mobile} alt="XX59 Headphones" link="/headphones/xx59">
        <h4>XX59 Headphones</h4>
        <p className="paragraph">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
      </Product>
      <Shop />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default HeadphonesCategoryPage;
