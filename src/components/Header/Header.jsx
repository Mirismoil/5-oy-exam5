import React, { useEffect } from "react";
import Logo from "../../assets/imgs/logo.svg";
import { CategoryData } from "../Slicers/General";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../assets/imgs/search.svg";
import style from "../Header/Header.module.scss";
import menu from "../../assets/imgs/burger.svg";
import axios from "axios";
function Header() {
  const dataArray = useSelector((store) => store.general.CategoryData);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://63566a79a2d1844a97742c99.mockapi.io/category")
      .then((data) => dispatch(CategoryData(data.data)));
  }, []);
  return (
    <header>
      <div className={style.container}>
        <div className={style.wrapper_items}>
          <div className={style.site_logo}>
            <Link to={"/"}>
              <img src={Logo} alt="site logo" />
            </Link>
          </div>
          <div className={style.menu}>
            <img
              src={menu}
              alt=""              
            />
          </div>
          <ul className={style.list}>
            {dataArray.map((item) => {
              return (
                <>
                  <li className={style.items} key={item.id}>
                    <Link
                      to={`category/${item.id}/posts`}
                      className={style.items__link}
                    >
                      {item.name}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <form className={style.wrap_input}>
            <input
              type="search"
              className={style.search}
              placeholder="Search"
            />
            <button className={style.btn}>
              <img src={Search} alt="logo search" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
