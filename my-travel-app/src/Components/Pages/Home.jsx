import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./home.module.scss";
import CSSModules from "react-css-modules";

function Home() {
  return (
    <div styleName="home">
      <Header />
      <Main />
    </div>
  );
}

export default CSSModules(Home, styles);
