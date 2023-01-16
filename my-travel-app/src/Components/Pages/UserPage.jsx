import Header from "../Header/Header";
import styles from "./userPage.module.scss";
import CSSModules from "react-css-modules";
import GetServices from "../../Services/GetServices";
import { useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import MyContext from "../../Context/context";

function UserPage() {
  const [trips, setTrips] = useState("");
  const { context } = useContext(MyContext);
  console.log(context);
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    loadTrips();
  }, []);

  async function loadTrips() {
    const data = await GetServices.getTrips();
    console.log(data);
    return setTrips(data);
  }
  console.log(trips);
  return (
    <div styleName="user-page__container">
      <Header state={state} />
      <div styleName="trips__user_page">
        {trips ? (
          trips.map((trip, index) => {
            return (
              <li key={index}>
                <p>
                  {`${trip.id}. Your trip to ${trip.destination} for  ${trip.activity} `}
                  .
                </p>
              </li>
            );
          })
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default CSSModules(UserPage, styles);
