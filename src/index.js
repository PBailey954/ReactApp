import React from "react";
import ReactDOM from "react-dom";

const title = "Coding Course";

ReactDOM.render(
  <div>
    <h1>{title}</h1>
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>JavaScript</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
