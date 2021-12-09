import Product from "../../frames/Product";
import Features from "../../frames/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const XX99M1DetailPage = () => {
  return (
    <main>
      <Product link="/" productDetail={true} image={productImage} price="1,750">
        <h4>XX99 Mark I Headphones</h4>
        <p>
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
      </Product>
      <Features>
        <p>
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </p>
        <p>
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
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

export default XX99M1DetailPage;
