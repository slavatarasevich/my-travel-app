import Header from "../Header/Header";
import styles from "./userPage.module.scss";
import CSSModules from "react-css-modules";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../Context/context";

function UserPage() {
  //   const blah = useContext(MyContext);
  const { context } = useContext(MyContext);
  console.log(context);
  const { state } = useLocation();
  console.log(state);
  return (
    <div styleName="user-page__container">
      <Header state={state} />
      <div styleName="trips__user_page">
        <ul>
          <li>
            1.
            {` You ${context.guests} are going to ${context.destination}, your activity is ${context.activity}`}
          </li>
          <li>2..</li>
          <li>3...</li>
        </ul>
      </div>
    </div>
  );
}

export default CSSModules(UserPage, styles);
