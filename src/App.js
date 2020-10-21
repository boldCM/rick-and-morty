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

  async function loadCharacters() {
    const charactersList = await getCharacter();

    const characterElements = charactersList.map((character) =>
      createCharacterCard({
        name: character.name,
        avatar: character.image,
      })
    );

    containerGet.append(...characterElements);
  }

  loadCharacters();

  const main = createElement("main", {
    className: "main",
    children: [containerGet],
  });
  return main;
}

export default App;
