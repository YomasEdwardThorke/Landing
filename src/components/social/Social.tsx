import React from "react";
import { Facebook } from "../icons/social/Facebook";
import { Insta } from "../icons/social/Insta";
import { Mail } from "../icons/social/Mail";
import css from "./Social.module.css";

const iconMap = {
  facebook: Facebook,
  instagram: Insta,
  mail: Mail,
};

const linkMap = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  mail: "mailto:example@gmail.com",
};

interface ISocialProps {
  type: "facebook" | "instagram" | "mail";
}

export function Social(props: ISocialProps) {
  const Icon = iconMap[props.type];

  const handleClick = () => {
    window.open(linkMap[props.type], "_blank");
  };

  return (
    <div className={css.social} onClick={handleClick}>
      <div className={css.icon}>
        <Icon />
      </div>
    </div>
  );
}
