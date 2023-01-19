import CSSModules from "react-css-modules";
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { useContext } from "react";
import MyContext from "../../Context/context";
import PostServices from "../../Services/PostServices";

function Header({ state }) {
  let navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [guests, setGuests] = useState("");
  const [duration, setDuration] = useState("");
  const { context, setContext } = useContext(MyContext);
  const { RangePicker } = DatePicker;

  function logoToHome() {
    navigate("/");
  }

  //choosing destination
  function handleDestination(event) {
    setDestination(event.target.value);
    console.log(destination);
    return;
  }

  //choosing activity

  function handleActivity(event) {
    setActivity(event.target.value);
    console.log(activity);
    return;
  }

  //setting dates

  const handleChange = async (value) => {
    let dates = await value;
    console.log(dates);
    return setDuration(dates);
  };

  //setting # of guests

  function handleGuestsNumber(event) {
    setGuests(event.target.value);
    console.log(typeof +guests); //TODO: how to create validation for user enters numbers not a string
  }

  async function handleOrderTripButton() {
    const result = await PostServices.postTrip(
      destination,
      activity,
      duration,
      guests
    );
    if (result === 201) {
      console.log("trip has been saved");
      setDestination("");
      setActivity("");
      setDuration("");
      setGuests("");
      return;
    }
  }

  //------------------------------------------------------------------------------------------------

  return (
    <div styleName="header__wrapper">
      <div styleName="header__top">
        <div styleName="header__logo">
          <img
            onClick={logoToHome}
            styleName="logo_name"
            src="./assets/icons/2rism.png"
            alt="logo"
          />
          <img src="./assets/icons/vector-arrow.png" alt="arrow" />
        </div>
        {!state ? (
          <div styleName="header__nav">
            <a href="/#">Home</a>
            <a href="/#">Hotels</a>
            <a href="/#">Restaurants</a>
            <a href="/#">Tours</a>
            <a href="/#">Destinations</a>
            <a href="/#">Activities</a>
            <a href="/#">Contact </a>
          </div>
        ) : (
          <span style={{ color: "#7b61ff", fontSize: "22px", fontWeight: 500 }}>
            Account Page
          </span>
        )}

        {!state ? (
          <div styleName="login">
            <span
              onClick={() => {
                navigate("auth");
              }}
            >
              Log in
            </span>
          </div>
        ) : (
          <div styleName="greet__header">
            Hello, <span>{state}</span>
          </div>
        )}
      </div>
      {!state ? (
        <>
          <h1>Discover the most engaging places</h1>
          <div styleName="button">
            <img src="./assets/icons/vector-globe.png" alt="globe" />
            <span>Discover on 3D Globe</span>
          </div>
        </>
      ) : null}

      <div styleName="form">
        <div styleName="form__location">
          <img src="./assets/icons/form-location.png" alt="" />
          <div styleName="form__location__card">
            <span>Location</span>
            <select
              onChange={handleDestination}
              value={destination}
              name="Location"
              id=""
              placeholder="Explore nearby destinations"
            >
              <option>Explore nearby destinations</option>
              <option>Big Sur</option>
              <option>Prescott</option>
              <option>Fort Mayers</option>
              <option>Tucson</option>
              <option>St. Joseph</option>
              <option>Madrid</option>
            </select>
          </div>
        </div>
        <div styleName="form__activity">
          <img src="./assets/icons/form-activity.png" alt="" />
          <div styleName="form__activity__card">
            <span>Activity</span>
            <select
              onChange={handleActivity}
              value={activity}
              name="Activity"
              id=""
              placeholder="All Activities"
            >
              <option>All Activities</option>
              <option>Sailing</option>
              <option>Climbing</option>
              <option>Skiing</option>
              <option>Hiking</option>
            </select>
          </div>
        </div>
        <div styleName="form__date">
          <img src="./assets/icons/form-date.png" alt="" />
          <div styleName="form__date__card">
            <span>When</span>
            <Space direction="vertical" size={12}>
              <RangePicker onChange={handleChange} />
            </Space>
          </div>
        </div>
        <div styleName="form__guests">
          <img src="./assets/icons/form-guests.png" alt="" />
          <div styleName="form__guests__card">
            <span>Guests</span>
            <input
              onChange={handleGuestsNumber}
              value={guests}
              name="Guests"
              id=""
              placeholder=" number of guest"
            ></input>
          </div>
        </div>
        <div onClick={handleOrderTripButton} styleName="order__button">
          <img src="./assets/icons/form-search.png" alt="" />
        </div>
      </div>
      {state && <span styleName="recent__trips">...Your recent trips</span>}
    </div>
  );
}

export default CSSModules(Header, styles);
