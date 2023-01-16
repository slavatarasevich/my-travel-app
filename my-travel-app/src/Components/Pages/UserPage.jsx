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
  // function durationSlice(date) {
  //   const newDate = date[0].slice(0, 9);
  //   return newDate;
  // }
  // console.log(trips[0].duration[0]);

  return (
    <div styleName="user-page__container">
      {/* {trips ? trips[5].duration[0].slice(0, 10) : <h1>Loading trips...</h1>} */}
      <Header state={state} />
      <div styleName="trips__user_page">
        {trips ? (
          trips.map((trip, index) => {
            return (
              <li key={index}>
                <p>
                  {`${trip.id}. Your trip to ${trip.destination} for ${trip.activity} set to: ${trip.duration} for ${trip.guests} people`}
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
