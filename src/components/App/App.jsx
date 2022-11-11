import React, { useEffect, useState } from "react";
import style from "../App/App.module.scss";
import Login from "../Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Protect from "../protect/protect";
import { useSelector } from "react-redux";
import Layout from "../../layout/layout";
import Hero from "../../layout/Hero";
import Modal from "../modal/Modal";
import Menu from "../Menu/Menu";
import Error from "../Error/Erorr";
import HeroBLock from "../../layout/section-main/HeroBLock";
import HeroRender from "../../layout/section-main/HeroRender";
import SingleCard from "../../layout/SingleCard/SingleCard";
import Log from "../LogAcc/Log";
import Loading from "../Loading/Loading";

function App() {
  const navigate = useNavigate();
  const store = useSelector((store) => store.general.auth.payload);
  useEffect(() => {
    navigate("/");
  }, [store]);
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route element={<Protect authentication={store} />}>
          <Route element={<Layout />}>
            <Route path="" element={<Hero />}>
              <Route path="/logout" element={<Log />} />
              <Route path="" element={<HeroBLock />}>
                <Route index element={<HeroRender />} />
                <Route path={"category/:id/posts"} element={<HeroRender />} />
                <Route
                  path={":id/posts/:id/posts/:id"}
                  element={<SingleCard />}
                ></Route>
              </Route>
              <Route path={"category/:id/posts/:id"} element={<SingleCard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
