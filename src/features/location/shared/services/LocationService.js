export const NOTHING_FOUND_ERROR = 'LOCATION_NOTHING_FOUND_ERROR';
export const UNEXPECTED_ERROR = 'LOCATION_UNEXPECTED_ERROR';

export const getLocationById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/location/${id}`)
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
