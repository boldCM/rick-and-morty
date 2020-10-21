import { createElement } from "../utils/elements";

export const createCharacterCard = ({ name, avatar }) => {
  const characterName = createElement("div", {
    innerText: name,
  });

  const characterImg = createElement("img", {
    src: avatar,
    alt: name,
  });

  const characterCard = createElement("div", {
    children: [characterName, characterImg],
  });

  return characterCard;
};
