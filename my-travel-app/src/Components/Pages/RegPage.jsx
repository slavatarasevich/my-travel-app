import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "./regPage.module.scss";
import PostServices from "../../Services/PostServices";

function RegPage() {
  const [name, setName] = useState("");
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
    <div styleName="reg-page__container">
      <h1>You can register here </h1>
      {regFlag ? (
        <h2>You've been registered</h2>
      ) : (
        <>
          <input
            onChange={handleInputName}
            type="text"
            placeholder="enter your username"
          />
          <input
            onChange={handleInputPass}
            type="text"
            placeholder="enter your password"
          />
          <button onClick={handleRegister}>Register</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </>
      )}
    </div>
  );
}

export default CSSModules(RegPage, styles);
