import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

import logo from "./../assets/shared/desktop/logo.svg";
import facebook from "./../assets/shared/desktop/icon-facebook.svg";
import twitter from "./../assets/shared/desktop/icon-twitter.svg";
import instagram from "./../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <hr />
      <div className={classes["logo-frame"]}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["footer-links"]}>
        <Link to="/" reloadDocument>
          Home
        </Link>
        <Link to="/headphones" reloadDocument>
          Headphones
        </Link>
        <Link to="/speakers" reloadDocument>
          Speakers
        </Link>
        <Link to="/earphones" reloadDocument>
          Earphones
        </Link>
      </div>
      <p className={`${classes.paragraph} paragraph`}>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className={classes.copyright}>Copyright 2021. All Rights Reserved</p>
      <div className={classes["social-media-links"]}>
        <div className={classes["icon-frame"]}>
          <img src={facebook} alt="Facebook Icon" />
        </div>
        <div className={classes["icon-frame"]}>
          <img src={twitter} alt="Twitter Icon" />
        </div>
        <div className={classes["icon-frame"]}>
          <img src={instagram} alt="Instagram Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
