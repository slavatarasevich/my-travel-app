import React from "react";
import Header from "../Header/Header";
import styles from "./userPage.module.scss";
import CSSModules from "react-css-modules";

function UserPage() {
  return (
    <div styleName="user-page__container">
      <h1>hello user:</h1>
      <Header />
    </div>
  );
}

export default CSSModules(UserPage, styles);
