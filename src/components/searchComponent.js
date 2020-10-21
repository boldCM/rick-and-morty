import { createElement } from "../utils/elements";
import "../components/searchForm.css";

export const searchComponent = ({ onchange }) => {
  const searchBar = createElement("input", {
    type: "text",
    className: "searchComponent__searchBar",
    placeholder: "Search by anything u want",
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
      // loadCharacters(event.target.value),}
    },
  });

  const submitButton = createElement("button", {
    className: "searchComponent__submitButton",
    innerText: "🔍",
    onclick: () => onchange,
  });

  const searchForm = createElement("form", {
    className: "searchComponent__searchForm",
    children: [searchBar, submitButton],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });

  return searchForm;
};
