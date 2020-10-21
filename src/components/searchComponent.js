import { createElement } from "../utils/elements";
import "../components/searchForm.css";

export const searchComponent = ({ onchange }) => {
  const searchBar = createElement("input", {
    type: "text",
    className: "searchComponent__searchBar",
    placeholder: "Search by anything u want",
  });

  const submitButton = createElement("button", {
    className: "searchComponent__submitButton",
    innerText: "🔍",
  });

  const searchForm = createElement("form", {
    className: "searchComponent__searchForm",
    children: [searchBar, submitButton],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(searchBar.value);
    },
  });

  return searchForm;
};
