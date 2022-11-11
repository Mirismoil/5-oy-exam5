import React, { useState, useEffect } from "react";
import style from "../Login/Login.module.scss";
import Logo from "../../assets/imgs/logo.svg";
import axios from "axios";
import { getToken, setAuth } from "../Slicers/General";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.general.token.payload);
  // const store = useSelector((store) => store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getApi = async (email, password) => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      headers: {},
      data: {
        email: email,
        password: password,
      },
    }).then((data) => {
      dispatch(getToken({ payload: data.data.token }));
    });
  };
  function handleClick() {
    getApi(email, password);
  }
  useEffect(() => {
    if (token) {
      dispatch(setAuth({ payload: true }));
    }
  }, [token, dispatch]);
  localStorage.setItem("token", JSON.stringify(token));
  return (
    <>
      <div className={style.container}>
        <div className={style.headerTitle}>
          <a href="/" className={style.title}>
            <img src={Logo} alt="logo site" />
          </a>
        </div>
        <h1 className={style.titleBig}>
          Sahifamga xush kelibsiz! Pulli kontentni o’qish <br />
          uchun tizimga kiring.
        </h1>
        <div className={style.form}>
          <span>
            <b className={style.bolt}>Login</b>
          </span>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div className={style.wrap__input}>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className={style.input}
                placeholder="LOGIN"
                type="text"
              />
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                className={style.input1}
                placeholder="PASSWORD"
              />
            </div>
            <div className={style.wrap__btn}>
              <button onClick={() => handleClick()} className={style.btn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
