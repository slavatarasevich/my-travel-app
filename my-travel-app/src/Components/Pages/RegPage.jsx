import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./regPage.module.scss";
import PostServices from "../../Services/PostServices";

function RegPage() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [regFlag, setRegFlag] = useState("");
  const navigate = useNavigate();

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    if (name === "" && password === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }

    const result = await PostServices.postUser(name, password);
    if (result === 201) {
      console.log("done");
      setRegFlag(true);
      setTimeout(() => {
        navigate("/auth");
      }, 1000);
    }
  };

  return (
    <div styleName="reg-page__wrapper">
      <div styleName="reg-page__container">
        <h1>Register now </h1>
        {error ? <h2>Enter your info</h2> : null}
        {regFlag ? (
          <h2>You've been registered</h2>
        ) : (
          <>
            <div styleName="form__div">
              <input
                styleName="form-input"
                onChange={handleInputName}
                type="text"
                placeholder="."
              />
              <label htmlFor="" styleName="form-label">
                Username
              </label>
            </div>
            <div styleName="form__div">
              <input
                styleName="form-input"
                onChange={handleInputPass}
                type="password"
                placeholder="."
              />
              <label htmlFor="" styleName="form-label">
                Password
              </label>
            </div>
            <button styleName="reg-form__button" onClick={handleRegister}>
              Register
            </button>
            <button
              styleName="reg-form__button__back"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CSSModules(RegPage, styles);
