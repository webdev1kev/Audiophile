import Product from "../../frames/Product";
import Features from "./../../components/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx59-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const XX99M2DetailPage = () => {
  return (
    <main>
      <Product
        link="/"
        newProduct={true}
        productDetail={true}
        image={productImage}
      >
        <h4>XX99 Mark II Headphones</h4>
        <p className="paragraph">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features />
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

export default XX99M2DetailPage;
