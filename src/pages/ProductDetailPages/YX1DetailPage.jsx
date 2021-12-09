import Product from "../../frames/Product";
import Features from "../../frames/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-yx1-earphones/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const YX1DetailPage = () => {
  return (
    <main>
      <Product
        link="/"
        newProduct={true}
        productDetail={true}
        image={productImage}
        price="599"
      >
        <h4>YX1 WIRELESS EARPHONES</h4>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features>
        <p>
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With improved ergonomics designed for full day wearing,
          these revolutionary earphones have been finely crafted to provide you
          with the perfect fit, delivering complete comfort all day long while
          enjoying exceptional noise isolation and truly immersive sound.
        </p>
        <p>
          The YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and voice assistants built into both earbuds. The new
          7-hour battery life can be extended up to 28 hours with the charging
          case, giving you uninterrupted play time. Exquisite craftsmanship with
          a splash resistant design now available in an all new white and grey
          color scheme as well as the popular classic black.
        </p>
      </Features>
      <Gallery images={[gallery1, gallery2, gallery3]} />
      <RelatedProducts>
        <RelatedProduct link="/" image={relatedProd1}>
          XX99 Mark I
        </RelatedProduct>
        <RelatedProduct link="/" image={relatedProd2}>
          XX59
        </RelatedProduct>
        <RelatedProduct link="/" image={relatedProd3}>
          ZX9 SPEAKER
        </RelatedProduct>
      </RelatedProducts>
      <AboutUs />
      <Footer />
    </main>
  );
};

export default YX1DetailPage;
