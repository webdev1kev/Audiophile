import LinkButton from "../../components/LinkButton";

import Product from "../../frames/Product";

import xx99M2Mobile from "./../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx59Mobile from "./../../assets/product-xx59-headphones/mobile/image-product.jpg";

import Features from "./../../components/Features";
import Gallery from "../../frames/Gallery";

const XX99M2DetailPage = () => {
  return (
    <main>
      <Product
        link="/"
        newProduct={true}
        productDetail={true}
        image={xx99M2Mobile}
      >
        <h4>XX99 Mark II Headphones</h4>
        <p className="paragraph">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features />
      <Gallery />
    </main>
  );
};

export default XX99M2DetailPage;
