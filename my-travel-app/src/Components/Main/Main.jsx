import CSSModules from "react-css-modules";
import styles from "./main.module.scss";
import data from "../../data/data.json";
import DestCard from "../DestCard/DestCard";
import HotelsCard from "../HotelsCard/HotelsCard";

function Main() {
  return (
    <div styleName="main">
      <div styleName="main__destinations">
        <h3>Popular Destinations</h3>
        <div styleName="wrapper__dest">
          {data[0].map((item, index) => {
            return <DestCard title={item.title} img={item.img} key={index} />;
          })}
        </div>
      </div>
      <div styleName="main__hotels__rest">
        <div>
          <div styleName="main__hotels__rest__and__btn">
            <h3>Hotels and Restaurants</h3>
            <div styleName="dest__button">
              <span>View all</span>
              <img src="./assets/icons/pop-dest-arrow.png" alt="" />
            </div>
          </div>
        </div>

        <div styleName="wrapper__hotels">
          {data[1].map((item, index) => {
            return <HotelsCard title={item.title} img={item.img} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CSSModules(Main, styles);

// <HotelsCard title={data[1].title} img={data[1].img} />
