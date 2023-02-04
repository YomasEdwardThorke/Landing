import { type } from "os";
import React from "react";
import { ICardData } from "../../App";
import { Card } from "../card/Card";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import css from "./Slider.module.css";

interface ISliderProps {
  cards: ICardData[];
  skip?: number;
}

export function Slider(props: ISliderProps) {
  const length = props.cards.length;
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(length - 1);
    }
  };

  const bulletClick = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div className={css.slider}>
      <Card
        counter={current + (props.skip || 0)}
        title={props.cards[current].title}
        text={props.cards[current].text}
      />
      <div className={css.prevArrow} onClick={prev}>
        <LeftArrow />
      </div>
      <div className={css.nextArrow} onClick={next}>
        <RightArrow />
      </div>
      <div className={css.bullets}>
        {[...new Array(length)].map((_, idx) => (
          <div
            className={
              idx === current ? [css.bullet, css.fill].join(" ") : css.bullet
            }
            onClick={() => bulletClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}
