import React, { useEffect } from "react";
import { getPosts } from "../../components/Slicers/General";
import { useDispatch, useSelector } from "react-redux";
import style from "../section-main/HeroBlock.module.scss";
import fc from "../../assets/imgs/facebok.svg";
import git from "../../assets/imgs/git.svg";
import tw from "../../assets/imgs/twiter.svg";
import inn from "../../assets/imgs/in.svg";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
const HeroBLock = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://63566a79a2d1844a97742c99.mockapi.io/category/${id ? id : 1}/posts`)
      .then((array) => dispatch(getPosts(array.data)))
  },[id])
  return (
    <div className={style.content}>
      <div className={style.content__left}>
        <h2 className={style.content__left__h2}>What I do!</h2>
        <div className={style.content__left__wrap__p}>
          <p className={style.content__left__p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            aliquet, orci in bibendum luctus, turpis ante pretium velit, eu
            rutrum augue erat ac eros. Cras ultricies mattis convallis.
          </p>
        </div>
        <span className={style.content__left__span}>Explore me </span>
        <div className={style.media__link}>
          <a className={style.media__link__a} href="https://www.facebook.com">
            <i className="fa-brands fa-facebook">
              <img src={fc} alt="logo facebok" />
            </i>
          </a>
          <a className={style.media__link__a} href="https://www.github.com">
            <i className="fa-brands fa-github">
              <img src={git} alt=" logo github" />
            </i>
          </a>
          <a className={style.media__link__a} href="https://twitter.com">
            <i className="fa-brands fa-twitter">
              <img src={tw} alt="logo twiter" />
            </i>
          </a>
          <a className={style.media__link__a} href="https://ru.linkedin.com">
            <i className="fa-brands fa-linkedin-in">
              <img src={inn} alt="logo in" />
            </i>
          </a>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default HeroBLock;
