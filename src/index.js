import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Moin";

  return element;
}

document.body.appendChild(component());
