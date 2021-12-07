import { Fragment } from "react";

import classes from "./NavMenuItems.module.css";

import headphonesThumbnail from "./../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "./../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "./../assets/shared/desktop/image-category-thumbnail-earphones.png";

import LinkButton from "../components/LinkButton";

const NavMenuItems = () => {
  return (
    <Fragment>
      <li className={classes.container}>
        <div className={classes["image-frame"]}>
          <img src={headphonesThumbnail} alt="" />
        </div>
        <p className={`${classes["link-title"]} sub-title`}>Headphones</p>
        <LinkButton to="/" type="arrow">
          Shop
        </LinkButton>
      </li>
      <li className={classes.container}>
        <div className={classes["image-frame"]}>
          <img src={speakersThumbnail} alt="" />
        </div>
        <p className={`${classes["link-title"]} sub-title`}>Headphones</p>
        <LinkButton to="/" type="arrow">
          Shop
        </LinkButton>
      </li>
      <li className={classes.container}>
        <div className={classes["image-frame"]}>
          <img src={earphonesThumbnail} alt="" />
        </div>
        <p className={`${classes["link-title"]} sub-title`}>Headphones</p>
        <LinkButton to="/" type="arrow">
          Shop
        </LinkButton>
      </li>
    </Fragment>
  );
};

export default NavMenuItems;
