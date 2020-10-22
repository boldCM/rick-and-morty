export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  // await sagt Javascript, es soll warten, bis die Antwort da ist.
  // Die funktion pausiert mit ihrer Ausführung in der entsprechenden await Zeile,
  // bis die Antwort (=promise = ich hab dir doch gesagt, dass ich mich darum kümmere!) da ist
  // Das geht auch nicht so sehr auf die CPU, weil JS in der Zeit andere Sachen tun kann
  const character = await response.json();
  // ist character unser promise? also das Waren auf die Antwort?
  // ich glaube promise ist immer mit einem Alternativ-weg wie .then() oder .catch() verbunden...
  // async functions always return a promise (MDN)
  // das keyword async sorgt dafür, dass ein promise returned wird (?) auch ohne return statement?
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
