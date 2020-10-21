import "./app.css";
// import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "../../rick-and-morty/src/utils/character";
import { getCharacterById } from "../src/utils/api";

// function waitFor(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }

function App() {
  const containerGet = createElement("div", {});

  // funktion erstellen, die im Hintergrund läuft und mit die Charactere holt...(aus der küche bzw Lager ;))
  async function getCharacters() {
    // gibt mir die Warte-Zeit an, hier sind es zwei Sekunden:
    // await waitFor(2000);
    const firstCharacter = await getCharacterById(1);
    const thirdCharacter = await getCharacterById(3);

    // irgendwas war noch mit destructuring objekten...

    containerGet.append(
      createCharacterCard({
        name: firstCharacter.name,
        avatar: firstCharacter.image,
      }),
      createCharacterCard({
        name: thirdCharacter.name,
        avatar: thirdCharacter.image,
      })
    );
  }

  getCharacters();

  const main = createElement("main", {
    children: [containerGet],
  });
  return main;
}

export default App;
