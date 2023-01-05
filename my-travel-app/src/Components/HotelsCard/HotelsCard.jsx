import React from "react";
import style from "./hotelsCard.module.scss";
import CSSModules from "react-css-modules";

function HotelsCard({ title, img }) {
  return (
    <div styleName="hotels__card">
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default CSSModules(HotelsCard, style);
