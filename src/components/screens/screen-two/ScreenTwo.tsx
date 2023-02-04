import React from "react";
import { ICardData } from "../../../App";
import { Button } from "../../button/Button";
import { Slider } from "../../slider/Slider";
import css from "./ScreenTwo.module.css";

interface IScreenTwoProps {
  cards: ICardData[];
}

export function ScreenTwo(props: IScreenTwoProps) {
  return (
    <div className={css.screenTwo}>
      <div className={css.info}>
        <div className={css.title}>
          Преврати заботу о здоровье в развлечение
        </div>
        <div className={css.text}>
          С <span className={css.jepa}>ConstaFit</span> ежедневная тренировочная
          рутина превращается в увлекательное соревнование, по окончанию
          которого можно выиграть настоящий денежный приз!
        </div>
        <Button type="primary" text="Уже хочу начать!" />
      </div>
      <div className={css.slider}>
        <Slider cards={props.cards} />
      </div>
    </div>
  );
}
