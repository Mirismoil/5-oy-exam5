import React from "react";
import style from "../Footer/Footer.module.scss";
import logoSite from "../../assets/imgs/logo1.svg";

function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.wrapImg}>
          <a href="">
          <img src={logoSite} alt="footer logo" className={style.img} />
          </a>
        </div>
        <ul className={style.wrappFooter}>
          <li className={style.item}>
            FIGHT WITH ME ON:
            <ul className={style.items__list}>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Twitter
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Instagram
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Telegram
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  YouTube
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Figma
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={style.wrappFooter}>
          <li className={style.item}>
            WHAT I HAVE DONE:
            <ul className={style.items__list}>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Xalq Kutubxonasi
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Websitee
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Website
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Play Market
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  App Store
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={style.wrappFooter}>
          <li className={style.item}>
            Contact
            <ul className={style.items__list}>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Xalq Kutubxonasi
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Websitee
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Website
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Play Market
                </a>
              </li>
              <li className={style.list}>
                <a className={style.listLink} href="#link">
                  Play Market
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
