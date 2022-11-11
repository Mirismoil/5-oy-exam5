import React from "react";
import style from "./Erorr.module.scss";
import { Link } from "react-router-dom";

import eror from "../../assets/imgs/404.png";
function Erorr() {
  return (
    <>
      <div className={style.wrapperErors}>
        <img src={eror} alt="eror" />
        <span className={style.span}>Page not found - 404</span>
        <p className={style.text}>
          This page not found (deleted or never exists). <br /> Try a phrase in search
          box or back to home and start again.
        </p>
        <Link to={"/login"} className={style.out}>Go Out</Link>
      </div>
    </>
  );
}

export default Erorr;
