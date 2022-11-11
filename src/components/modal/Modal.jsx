import React from "react";
import style from "../modal/Modal.module.scss";
function Modal() {
  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <h2 className={style.box_h2}>Natijalar</h2>
        <div className={style.wrap_titles}>
          <h3>Post title</h3>
          <span className={style.wrap_titles__span}> September 24.2020</span>
        </div>
        <p className={style.box__text}>Post description Post description Post descri...</p>
      </div>
      <div className={style.box}>
        <div className={style.wrap_titles}>
          <h3>Post title</h3>
          <span className={style.wrap_titles__span}> September 24.2020</span>
        </div>
        <p className={style.box__text}>Post description Post description Post descri...</p>
      </div>
    </div>
  );
}

export default Modal;
