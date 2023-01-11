// import React, { useContext } from "react";
import Header from "../Header/Header";
import styles from "./userPage.module.scss";
import CSSModules from "react-css-modules";
// import MyContext from "../../Context/context";
import { useLocation } from "react-router-dom";

function UserPage() {
  //   const blah = useContext(MyContext);
  const { state } = useLocation();
  console.log(state);
  return (
    <div styleName="user-page__container">
      <Header state={state} />
      <div styleName="trips__user_page">
        <ul>
          <li>1.</li>
          <li>2..</li>
          <li>3...</li>
        </ul>
      </div>
    </div>
  );
}

export default CSSModules(UserPage, styles);
