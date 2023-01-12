import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./Components/App/App";
import { MyConextProvider } from "./Context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyConextProvider>
    <Router>
      <App />
    </Router>
  </MyConextProvider>
);
