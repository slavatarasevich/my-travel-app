import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./authPage.module.scss";
import CSSModules from "react-css-modules";
import GetServices from "../../Services/GetServices";


function AuthPage() {
  let navigate = useNavigate();
  const [authUsers, setAuthUsers] = useState([]);
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
    const filteredArr = authUsers.filter((authUser) => {
      return authUser.user === name && authUser.password === password;
    });
    console.log(filteredArr);
    if (filteredArr.length > 0) {
      navigate("/user");
    }
  }

  return (
    <div styleName="auth__page">
      <h1>Please Authorize</h1>
      <input onChange={handleInputName} type="text" placeholder="name" />
      <input onChange={handleInputPass} type="text" placeholder="password" />
      <div styleName="log-reg__buttons">
        <button onClick={handleLogin}>Log in</button>
        <button
          onClick={() => {
            navigate("/reg");
          }}
        >
          Register
        </button>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default CSSModules(AuthPage, styles);
