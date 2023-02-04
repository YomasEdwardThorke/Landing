import React from "react";
import css from "./ContentScreen.module.css";

interface IContentScreenProps {
  children?: React.ReactNode;
  noTop?: boolean;
}

export function ContentScreen(props: IContentScreenProps) {
  return (
    <div className={[css.contentScreen, props.noTop && css.noTop].join(" ")}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
}
