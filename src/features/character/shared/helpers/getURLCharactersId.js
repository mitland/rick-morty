const getURLCharactersId = (characters) => {
  if (!characters) return [];

  return characters.map((character) => character.split('character/')[1]);
};

export default getURLCharactersId;
