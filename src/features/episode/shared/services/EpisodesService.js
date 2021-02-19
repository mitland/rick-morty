export const NOTHING_FOUND_ERROR = 'EPISODE_NOTHING_FOUND_ERROR';
export const UNEXPECTED_ERROR = 'EPISODE_UNEXPECTED_ERROR';

export const getEpisodesByPage = (page) => {
  return fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then((data) => data.json())
    .then((response) => {
      if (response.error) {
        throw new Error(NOTHING_FOUND_ERROR);
      }

      return response;
    })
    .catch(defaultCatch);
};

export const getEpisodeById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
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
