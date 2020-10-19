import _ from "lodash";
import "./style.css";
import Star from "./star.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myStar = new Image();
  myStar.src = Star;
  element.append(myStar);

  return element;
}

document.body.appendChild(component());
