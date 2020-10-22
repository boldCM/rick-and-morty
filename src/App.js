import "./app.css";
// import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "../src/components/character";
import { getCharacter } from "../src/utils/api";
import { searchComponent } from "../../rick-and-morty/src/components/searchComponent";
import { createButton } from "../src/components/button";

// function waitFor(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }

function App() {
  // const leonsCharacterContainer = createCharacterCard({ name, avatar });
  // müsste bei mir characterContainer sein

  const mainHeader = createElement("h1", {
    innerText: "Rick and Morty",
    className: "main__header",
  });

  const containerGet = createElement("div", {
    className: "main__containerGet",
    // children: [leonsCharacterContainer],
  });

  async function loadCharacters(name) {
    const charactersList = await getCharacter(name);

    const characterElements = charactersList.map((character) =>
      createCharacterCard({
        name: character.name,
        avatar: character.image,
      })
    );

    containerGet.innerHTML = "";
    containerGet.append(...characterElements);
  }

  const getSearch = searchComponent({
    onchange: (value) => {
      loadCharacters(value);
    },
  });

  loadCharacters();

  const main = createElement("main", {
    className: "main",
    children: [mainHeader, getSearch, containerGet],
  });
  return main;
}

export default App;
