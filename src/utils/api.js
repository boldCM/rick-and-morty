export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getCharacter() {
  const url = "https://rickandmortyapi.com/api/character/";
  const response = await fetch(url);
  const data = await response.json();
  // const fstCharacters = data.results.slice();
  return data.results;
}
