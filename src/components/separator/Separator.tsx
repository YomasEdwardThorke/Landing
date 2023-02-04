import React from "react";
import css from "./Separator.module.css";

interface ISeparatorProps {
  type: "ltr" | "rtl";
  text: string;
}

export function Separator(props: ISeparatorProps) {
  return (
    <div className={[css.separator, css[props.type]].join(" ")}>
      {props.text}
    </div>
  );
}
