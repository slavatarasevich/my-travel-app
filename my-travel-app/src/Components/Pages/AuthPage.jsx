import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./authPage.module.scss";
import CSSModules from "react-css-modules";
import GetServices from "../../Services/GetServices";

function AuthPage() {
  let navigate = useNavigate();
  const [authUsers, setAuthUsers] = useState([]);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const authUsers = await GetServices.getUsers(); //loading authorised users list

    return setAuthUsers(authUsers);
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };

  function handleLogin() {
    if (name === "" && password === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
    const filteredArr = authUsers.filter((authUser) => {
      return authUser.user === name && authUser.password === password;
    });
    console.log(filteredArr);
    if (filteredArr.length > 0) {
      navigate("/user", { state: name });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }

  return (
    <div styleName="auth__page__wrapper">
      <div styleName="auth__page">
        {error ? <h1>Enter your creds</h1> : <h1>Please Authorize</h1>}

        <div styleName="form__div">
          <input
            onChange={handleInputName}
            type="text"
            styleName="form-input"
            placeholder="."
          />
          <label htmlFor="" styleName="form-label">
            Username
          </label>
        </div>

        <div styleName="form__div">
          <input
            onChange={handleInputPass}
            type="password"
            styleName="form-input"
            placeholder="."
          />
          <label htmlFor="" styleName="form-label">
            Password
          </label>
        </div>

        <div styleName="log-reg__buttons">
          <button styleName="auth-form__buttons" onClick={handleLogin}>
            Log in
          </button>
          <button
            styleName="auth-form__buttons"
            onClick={() => {
              navigate("/reg");
            }}
          >
            Register
          </button>
        </div>
        <button
          styleName="auth-form__buttons__back"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CSSModules(AuthPage, styles);
