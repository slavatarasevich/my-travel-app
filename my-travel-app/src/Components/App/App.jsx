import CSSModules from "react-css-modules";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import Home from "../Pages/Home";
import AuthPage from "../Pages/AuthPage";
import UserPage from "../Pages/UserPage";
import RegPage from "../Pages/RegPage";

function App() {
  return (
    <div styleName="App__container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/reg" element={<RegPage />} />
      </Routes>
    </div>
  );
}

export default CSSModules(App, styles);
