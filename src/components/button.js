import { createElement } from "../utils/elements";
import "./button.css";

export const createButton = (props) => {
  const button = createElement("button", {
    className: "button",
    ...props,
  });
  return button;
};
