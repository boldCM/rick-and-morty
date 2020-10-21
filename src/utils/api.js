export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getCharacter(name) {
  let url = "https://rickandmortyapi.com/api/character/";
  if (name) {
    url += `?name=${name}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  // const fstCharacters = data.results.slice();
  return data.results;
}
