import { createElement } from "../utils/elements";
import "../components/character.css";
import starActive from "../assets/star_active.svg";
import starInactive from "../assets/star_inactive.svg";

export const createCharacterCard = ({ name, avatar, favouritesActive }) => {
  const favouritesIcon = createElement("img", {
    className: "characterCard__header__favourite",
    src: favouritesActive ? starActive : starInactive,
  });

  const characterName = createElement("div", {
    className: "characterCard__header__name",
    innerText: name,
  });

  const characterImg = createElement("img", {
    className: "characterCard__img",
    src: avatar,
    alt: name,
    loading: "lazy",
  });

  const characterCardHeader = createElement("div", {
    className: "characterCard__header",
    children: [favouritesIcon, characterName],
  });

  const characterCard = createElement("div", {
    className: "characterCard",
    children: [characterCardHeader, characterImg],
  });

  return characterCard;
};
