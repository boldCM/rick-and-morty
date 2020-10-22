import { createElement } from "../utils/elements";
import "../components/character.css";

export const createCharacterCard = ({ name, avatar }) => {
  const characterName = createElement("div", {
    className: "characterCard__header",
    innerText: name,
  });

  const characterImg = createElement("img", {
    className: "characterCard__img",
    src: avatar,
    alt: name,
    loading: "lazy",
  });

  const characterCard = createElement("div", {
    className: "characterCard",
    children: [characterName, characterImg],
  });

  return characterCard;
};
