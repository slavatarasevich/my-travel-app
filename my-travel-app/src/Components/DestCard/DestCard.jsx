import CSSModules from "react-css-modules";
import styles from "./destCard.module.scss";
function DestCard({ title, img }) {
  return (
    <div styleName="dest__card">
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
}

export default CSSModules(DestCard, styles);
