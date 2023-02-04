import React from "react";
import { Button } from "../../button/Button";
import css from "./ScreenOne.module.css";
import main from "../../../assets/main.svg";

export function ScreenOne() {
  return (
    <div className={css.screenOne}>
      <div className={css.info}>
        <div className={css.title}>Прокачай своё тело и свой кошелёк</div>
        <div className={css.text}>
          <p>
            <span className={css.jepa}>ConstaFit</span> мотивирует своих
            пользователей регулярно заниматься спортом и даёт возможность на
            этом заработать.
          </p>
          <p>
            Познакомься со своим новым тренером, которому нужно платить только
            за пропущенные тренировки!
          </p>
        </div>
        <div className={css.buttons}>
          <Button type="primary" text="Зарегистрироваться" />
          <Button type="secondary" text="Пробная тренировка" />
        </div>
      </div>
      <img className={css.pic} src={main} />
    </div>
  );
}
