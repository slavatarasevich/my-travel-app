import CSSModules from "react-css-modules";
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { useContext } from "react";
import MyContext from "../../Context/context";

function Header({ state }) {
  let navigate = useNavigate();
  const [guests, setGuests] = useState("");
  const { RangePicker } = DatePicker;
  function logoToHome() {
    navigate("/");
  }

  const { context, setContext } = useContext(MyContext);

  const handleChange = async (value) => {
    let dates = await value;
    console.log(dates);
    return;
    // // setDate(dates);
    // setContext(dates);
    // console.log(context);
  };

  function guestsTotal(e) {
    setGuests(e.target.value);
    console.log(guests);
    setContext(guests);
  }

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
      {!state && (
        <>
          <h1>Discover the most engaging places</h1>
          <div styleName="button">
            <img src="./assets/icons/vector-globe.png" alt="globe" />
            <span>Discover on 3D Globe</span>
          </div>
        </>
      )}

      <div styleName="form">
        <div styleName="form__location">
          <img src="./assets/icons/form-location.png" alt="" />
          <div styleName="form__location__card">
            <span>Location</span>
            <select
              name="Location"
              id=""
              placeholder="Explore nearby destinations"
            >
              <option>Explore nearby destinations</option>
            </select>
          </div>
        </div>
        <div styleName="form__activity">
          <img src="./assets/icons/form-activity.png" alt="" />
          <div styleName="form__activity__card">
            <span>Activity</span>
            <select name="Activity" id="" placeholder="All Activities">
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
              onChange={guestsTotal}
              value={guests}
              name="Guests"
              id=""
              placeholder=" number of guest"
            ></input>
          </div>
        </div>
        <div styleName="form__button">
          <img src="./assets/icons/form-search.png" alt="" />
        </div>
      </div>
      {state && (
        <span
          style={{
            backgroundColor: "rgba(0,0,0,.5)",
            fontSize: "42px",
            fontWeight: "400",
            marginTop: "300px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          ...Your recent trips
        </span>
      )}
    </div>
  );
}

export default CSSModules(Header, styles);
