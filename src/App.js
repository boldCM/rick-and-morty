import "./app.css";
// import Header from "./components/Header";
import { createElement } from "./utils/elements";
import { createCharacterCard } from "../src/components/character";
import { getCharacterById } from "../src/utils/api";

// function waitFor(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }

function App() {
  const containerGet = createElement("div", {
    className: "main__containerGet",
  });

  // funktion erstellen, die im Hintergrund läuft und mit die Charactere holt...(aus der küche bzw Lager ;))
  async function loadCharacters() {
    // gibt mir die Warte-Zeit an, hier sind es zwei Sekunden:
    // await waitFor(2000);
    const firstCharacter = await getCharacterById(1);
    const secondCharacter = await getCharacterById(2);
    const thirdCharacter = await getCharacterById(3);
    const fourthCharacter = await getCharacterById(4);
    const fifthsCharacter = await getCharacterById(5);
    const sixthCharacter = await getCharacterById(6);
    const seventhCharacter = await getCharacterById(7);
    const eigthsCharacter = await getCharacterById(8);
    const ninesCharacter = await getCharacterById(9);
    const tenthCharacter = await getCharacterById(10);

    // irgendwas war noch mit destructuring objekten...

    containerGet.append(
      createCharacterCard({
        name: firstCharacter.name,
        avatar: firstCharacter.image,
      }),
      createCharacterCard({
        name: secondCharacter.name,
        avatar: secondCharacter.image,
      }),
      createCharacterCard({
        name: thirdCharacter.name,
        avatar: thirdCharacter.image,
      }),
      createCharacterCard({
        name: fourthCharacter.name,
        avatar: fourthCharacter.image,
      }),
      createCharacterCard({
        name: fifthsCharacter.name,
        avatar: fifthsCharacter.image,
      }),
      createCharacterCard({
        name: sixthCharacter.name,
        avatar: sixthCharacter.image,
      }),
      createCharacterCard({
        name: seventhCharacter.name,
        avatar: seventhCharacter.image,
      }),
      createCharacterCard({
        name: eigthsCharacter.name,
        avatar: eigthsCharacter.image,
      }),
      createCharacterCard({
        name: ninesCharacter.name,
        avatar: ninesCharacter.image,
      }),
      createCharacterCard({
        name: tenthCharacter.name,
        avatar: tenthCharacter.image,
      })
    );
  }

  loadCharacters();

  const main = createElement("main", {
    className: "main",
    children: [containerGet],
  });
  return main;
}

export default App;
