import React from "react";
import css from "./Footer.module.css";
import constafit from "../../assets/constafit.svg";
import { Social } from "../social/Social";

export function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.content}>
        <img className={css.logo} src={constafit} />
        <div className={css.info}>
          <div className={css.title}>Информация</div>
          <div className={css.text}>О нас</div>
          <div className={css.text}>Наши методики</div>
          <div className={css.text}>Политика конфиденциальности</div>
        </div>
        <div className={css.contact}>
          <div className={css.title}>Для связи с нами</div>
          <div className={css.socials}>
            <Social type="facebook" />
            <Social type="instagram" />
            <Social type="mail" />
          </div>
        </div>
      </div>
    </div>
  );
}
