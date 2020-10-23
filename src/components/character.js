import { createElement } from "../utils/elements";
import "../components/character.css";
import starActive from "../assets/star_active.svg";
import starInactive from "../assets/star_inactive.svg";

export const createCharacterCard = ({ name, avatar, favouritesActive }) => {
  const favouritesIconSrc = favouritesActive ? starActive : starInactive;

  const favouritesIcon = createElement("img", {
    // className: "characterCard__header__favourite",
    src: favouritesIconSrc,
  });

  const favouritesButton = createElement("button", {
    className: "characterCard__header__favouriteButton",
    children: [favouritesIcon],
    onclick: () => {
      let currentFavourites = JSON.parse(
        localStorage.getItem("favourites") || "[]"
      );

      const isFavourite = currentFavourites.includes(name);

      if (isFavourite) {
        currentFavourites = currentFavourites.filter(
          (favourite) => favourite !== name
        );
      }
      // potentiellerKlammerfehler im ersten if-Satz
      else {
        currentFavourites.push(name);
      }

      localStorage.setItem("favourites", JSON.stringify(currentFavourites));
      favouritesIcon.src = !isFavourite ? starActive : starInactive;
    },
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
    children: [favouritesButton, characterName],
  });

  const characterCard = createElement("div", {
    className: "characterCard",
    children: [characterCardHeader, characterImg],
  });

  return characterCard;
};
