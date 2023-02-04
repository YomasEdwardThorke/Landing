import React from "react";
import { ICardData } from "../../../App";
import { Button } from "../../button/Button";
import { Slider } from "../../slider/Slider";
import css from "./ScreenThree.module.css";

interface IScreenThreeProps {
  cards: ICardData[];
}

export function ScreenThree(props: IScreenThreeProps) {
  return (
    <div className={css.screenThree}>
      <div className={css.slider}>
        <Slider cards={props.cards} skip={3} />
      </div>
      <div className={css.info}>
        <div className={css.title}>Ключ к успеху - постоянство</div>
        <div className={css.text}>
          С <span className={css.jepa}>ConstaFit</span> ежедневная тренировочная
          рутина превращается в увлекательное соревнование, по окончанию
          которого можно выиграть настоящий денежный приз!
        </div>
        <Button type="primary" text="Начинаем прямо сейчас!!" />
      </div>
    </div>
  );
}
