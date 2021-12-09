import Product from "../../frames/Product";
import Features from "../../frames/Features";
import Gallery from "../../frames/Gallery";
import { RelatedProducts, RelatedProduct } from "../../frames/RelatedProducts";
import Footer from "../../frames/Footer";
import AboutUs from "../../frames/AboutUs";

import productImage from "./../../assets/product-xx59-headphones/mobile/image-product.jpg";

import gallery1 from "./../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import gallery2 from "./../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import gallery3 from "./../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";

import relatedProd1 from "./../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import relatedProd2 from "./../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import relatedProd3 from "./../../assets/shared/mobile/image-zx9-speaker.jpg";

const XX59DetailPage = () => {
  return (
    <main>
      <Product link="/" productDetail={true} image={productImage} price="899">
        <h4>XX59 Headphones</h4>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
      <Features>
        <p>
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
        </p>
        <p>
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
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

export default XX59DetailPage;
