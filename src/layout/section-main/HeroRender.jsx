import React from "react";
import { useSelector } from "react-redux";
import style from "../section-main/HeroBlock.module.scss";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const HeroRender = () => {
  const Posts = useSelector((store) => store.general.Posts);
  return (
    <div className={style.content__right}>
      <h1 className={style.content__right__h1}>Recent Posts</h1>
      {Posts.map((element) => {
        return (
          <Link to={`${element.title}`}>
            <div className={style.content__card}>
              <div className={style.span__text}>
                <span>{dayjs(element.createdAt).format("MMMM D YYYY")}</span>
                <span>{element.title}</span>
              </div>
              <div className={style.wrap__h2}>
                <h2>{element.description}</h2>
              </div>
              
              <div className={style.wrapp__time}>
                <span className={style.time}>
                  {element.readTime} minutes read
                </span>
              </div>
              <hr />
            </div>
          </Link>
        );
      })}
      <div className={style.content__spans}>
        <p className={style.content__spans__text}>
          <span className={style.content__spans__text__spans}>1</span>
          <span className={style.content__spans__text__spans}>2</span>
          <span className={style.content__spans__text__spans}>3</span>
          <span className={style.content__spans__text__spans}>4</span>
          <span className={style.content__spans__text__spans}>5</span>
        </p>
      </div>
    </div>
  );
};
export default HeroRender;
