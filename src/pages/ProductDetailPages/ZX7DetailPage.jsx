import Product from "../../frames/Product";
import Features from "../../frames/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-zx7-speaker/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const ZX7DetailPage = () => {
  return (
    <main>
      <Product link="/" productDetail={true} image={productImage} price="3,500">
        <h4>ZX7 Speakers</h4>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features>
        <p>
          Reap the advantages of a flat diaphragm tweeter cone. This provides a
          fast response rate and excellent high frequencies that lower tiered
          bookshelf speakers cannot provide. The woofers are made from aluminum
          that produces a unique and clear sound. XLR inputs allow you to
          connect to a mixer for more advanced usage.
        </p>
        <p>
          The ZX7 speaker is the perfect blend of stylish design and high
          performance. It houses an encased MDF wooden enclosure which minimises
          acoustic resonance. Dual connectivity allows pairing through bluetooth
          or traditional optical and RCA input. Switch input sources and control
          volume at your finger tips with the included wireless remote. This
          versatile speaker is equipped to deliver an authentic listening
          experience.
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

export default ZX7DetailPage;
