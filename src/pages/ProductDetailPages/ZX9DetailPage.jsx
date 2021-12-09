import Product from "../../frames/Product";
import Features from "../../frames/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-zx9-speaker/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-zx9-speaker/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-zx9-speaker/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const ZX9DetailPage = () => {
  return (
    <main>
      <Product
        link="/"
        newProduct={true}
        productDetail={true}
        image={productImage}
        price="4,500"
      >
        <h4>ZX9 Speakers</h4>
        <p className="paragraph">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features>
        <p>
          Connect via Bluetooth or nearly any wired source. This speaker
          features optical, digital coaxial, USB Type-B, stereo RCA, and stereo
          XLR inputs, allowing you to have up to five wired source devices
          connected for easy switching. Improved bluetooth technology offers
          near lossless audio quality at up to 328ft (100m).
        </p>
        <p>
          Discover clear, more natural sounding highs than the competition with
          ZX9’s signature planar diaphragm tweeter. Equally important is its
          powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
          unit. You’ll be able to enjoy equal sound quality whether in a large
          room or small den. Furthermore, you will experience new sensations
          from old songs since it can respond to even the subtle waveforms.
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

export default ZX9DetailPage;
