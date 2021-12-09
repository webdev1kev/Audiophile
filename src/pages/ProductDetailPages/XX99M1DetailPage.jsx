import xx99M1Mobile from "./../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

const XX99M1DetailPage = () => {
  return (
    <main>
      <Product
        link="/"
        newProduct={true}
        productDetail={true}
        image={xx99M1Mobile}
      >
        <h4>XX99 Mark II Headphones</h4>
        <p className="paragraph">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
      </Product>
    </main>
  );
};

export default XX99M1DetailPage;
