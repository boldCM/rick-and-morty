import "./app.css";
// import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "../src/components/character";
import { getCharacter } from "../src/utils/api";

// function waitFor(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }

function App() {
  // const leonsCharacterContainer = createCharacterCard({ name, avatar });
  // müsste bei mir characterContainer sein

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

  loadCharacters();

  const searchBar = createElement("input", {
    type: "text",
    className: "main__searchBar",
    onchange: (event) => loadCharacters(event.target.value),
  });

  const main = createElement("main", {
    className: "main",
    children: [searchBar, containerGet],
  });
  return main;
}

export default App;
