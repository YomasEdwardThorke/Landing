import React from "react";
import css from "./Button.module.css";

interface IButtonProps {
  type: "primary" | "secondary";
  text: string;
  onClick?: () => void;
}

export function Button(props: IButtonProps) {
  return (
    <div className={[css.button, css[props.type]].join(" ")}>{props.text}</div>
  );
}
