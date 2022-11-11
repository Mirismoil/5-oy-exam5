import React from "react";
import logo from "../../assets/imgs/logo.svg";
import X from "../../assets/imgs/x.svg";
import style from "../Menu/Menu.module.scss";
function Menu() {
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <a href="#link">
          <img src={logo} alt="" />
        </a>
        <button className={style.X}>
          <img src={X} alt="x" />
        </button>
      </div>
      <div className={style.links}>
        <a className={style.linka__link} href="/link">
          tenetur
        </a>
        <a className={style.linka__link} href="/#">
          laudantium
        </a>
        <a className={style.linka__link} href="/#">
          placeat
        </a>
        <a className={style.linka__link} href="/#">
          corrupti
        </a>
      </div>
    </div>
  );
}

export default Menu;
