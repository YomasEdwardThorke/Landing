import React from "react";
import css from "./Card.module.css";
import slide1 from "../../assets/slide1.svg";
import slide2 from "../../assets/slide2.svg";
import slide3 from "../../assets/slide3.svg";
import slide4 from "../../assets/slide4.svg";
import slide5 from "../../assets/slide5.svg";
import slide6 from "../../assets/slide6.svg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

interface ICardProps {
  counter: number;
  title: string;
  text: string;
}

export function Card(props: ICardProps) {
  return (
    <div className={css.card}>
      <div className={css.head}>
        <div className={css.counter}>0{props.counter + 1}</div>
        <div className={css.title}>{props.title}</div>
      </div>
      <div
        className={css.pic}
        style={{ backgroundImage: `url("${images[props.counter]}")` }}
      ></div>
      <div className={css.text}>{props.text}</div>
    </div>
  );
}
