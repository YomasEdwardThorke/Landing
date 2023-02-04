import React from "react";
import css from "./Header.module.css";
import constafit from "../../assets/constafit.svg";
// import { Login } from "../login/Login";

export function Header() {
  return (
    <div className={css.header}>
      <img className={css.pic} src={constafit} />
      <div className={css.login}>Вход</div>
    </div>
  );
}
