import classes from "./ShopSection.module.css";

import NavMenuItems from "../../frames/NavMenuItems";

const ShopSection = () => {
  return (
    <section className={classes["shop-section"]}>
      <ul className={classes["shop-menu"]}>
        <NavMenuItems />
      </ul>
    </section>
  );
};

export default ShopSection;
