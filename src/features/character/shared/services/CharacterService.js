import QueryString from 'query-string';
import abortableFetch from '../../../../helpers/fetch/abortableFetch';

export const NOTHING_FOUND_ERROR = 'CHARACTER_NOTHING_FOUND_ERROR';
export const UNEXPECTED_ERROR = 'CHARACTER_UNEXPECTED_ERROR';

export const getCharactersById = (characterIds) => {
  const ids = characterIds.join(',');

  return fetch(`https://rickandmortyapi.com/api/character/${ids}`)
    .then((data) => data.json())
    .then((response) => {
      if (response.error) {
        throw new Error(NOTHING_FOUND_ERROR);
      }

      return response;
    })
    .catch(defaultCatch);
};

export const getCharacters = (filters) => {
  const queryFilters = QueryString.stringify(filters);
  return abortableFetch(
    `https://rickandmortyapi.com/api/character?${queryFilters}`
  )
    .then((data) => data.json())
    .then((response) => {
      if (response.error) {
        throw new Error(NOTHING_FOUND_ERROR);
      }

      return response;
    })
    .catch(defaultCatch);
};

const defaultCatch = (error) => {
  const errorType =
    error.message === NOTHING_FOUND_ERROR
      ? NOTHING_FOUND_ERROR
      : UNEXPECTED_ERROR;

  throw new Error(errorType);
};
