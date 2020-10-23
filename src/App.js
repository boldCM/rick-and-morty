import "./app.css";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "../src/components/character";
import { getCharacter } from "../src/utils/api";
import { searchComponent } from "../../src/components/searchComponent";
import { createButton } from "../src/components/button";

function App() {
  // const leonsCharacterContainer = createCharacterCard({ name, avatar });
  // müsste bei mir characterContainer sein

  let lastName = null;
  let nextPage = null;

  const mainHeader = createElement("h1", {
    innerText: "Rick and Morty",
    className: "main__header",
  });

  const loadmoreButton = createButton({
    innerText: "Load more",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });

  const containerGet = createElement("div", {
    className: "main__containerGet",
    // children: [leonsCharacterContainer],
  });

  async function loadCharacters(name, page) {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");

    const charactersList = await getCharacter(name, page);

    const characterElements = charactersList.results.map((character) =>
      createCharacterCard({
        name: character.name,
        avatar: character.image,
        favouritesActive: favourites.includes(character.name),
      })
    );

    containerGet.append(...characterElements);
    nextPage = charactersList.info.next?.match(/\d+/)[0];
    loadmoreButton.disabled = !charactersList.info.next;
    lastName = name;

    // reappend loadmoreButton to avoid scrolldown:
    containerGet.append(loadmoreButton);
  }

  const getSearch = searchComponent({
    // onchange: (value) => {
    //   loadCharacters(value);
    onchange: (value) => {
      containerGet.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();

  const main = createElement("main", {
    className: "main",
    children: [mainHeader, getSearch, containerGet],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadmoreButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      loadmoreButton.click();
    }
  });

  return main;
}

export default App;
