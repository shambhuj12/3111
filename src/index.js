import React from "react";
import ReactDOM from "react-dom";
import * as constant from "./Math";

ReactDOM.render(
  <ul>
    <li>{constant.default}</li>
    <li>{constant.e()}</li>
    <li>{constant.g()}</li>
  </ul>,
  document.getElementById("root")
);
