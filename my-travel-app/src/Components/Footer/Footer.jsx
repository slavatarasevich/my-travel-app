import CSSModules from "react-css-modules";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div styleName="footer">
      <h4>Footer</h4>
    </div>
  );
}

export default CSSModules(Footer, styles);
