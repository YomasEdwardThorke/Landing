import React from "react";
import { Button } from "../../button/Button";
import css from "./ScreenFour.module.css";
import progress from "../../../assets/progress.svg";

export function ScreenFour() {
  return (
    <div className={css.screenFour}>
      <div className={css.info}>
        <div className={css.title}>Мы прогрессируем вместе с тобой</div>
        <div className={css.text}>
          <p>
            В данный момент для распознавания доступны только приседания, но по
            мере развития системы будут добавляться новые упражнения, а также
            появится возможность отслеживать тренировки с помощью камеры
            телефона.
          </p>
          <p>
            В скором времени вместе с <span className="jepa">ConstaFit</span> ты
            сможешь детально прорабатывать всё своё тело, а также заниматься по
            различным программам тренировок от профессиональных спортсменов и
            тренеров!
          </p>
        </div>
        <div className={css.buttons}>
          <Button type="primary" text="Зарегистрироваться" />
          <Button type="secondary" text="Пробная тренировка" />
        </div>
      </div>
      <img className={css.pic} src={progress} />
    </div>
  );
}
