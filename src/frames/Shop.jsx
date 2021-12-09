import classes from "./Shop.module.css";

import NavMenuItems from "./NavMenuItems";

const Shop = () => {
  return (
    <section className={classes["shop-section"]}>
      <ul className={classes["shop-menu"]}>
        <NavMenuItems />
      </ul>
    </section>
  );
};

export default Shop;
