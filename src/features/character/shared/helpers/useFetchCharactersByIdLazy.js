import { useRef, useState } from 'react';
import useFetch from '../../../../helpers/fetch/useFetch';
import { getCharactersById } from '../services/CharacterService';
import getURLCharactersId from './getURLCharactersId';
import ErrorCatcher from '../../../../helpers/fetch/ErrorCatcher';

const useFetchCharactersByIdLazy = (
  characterIds,
  { initOffset, initLimit }
) => {
  const pagination = useRef({
    offset: initOffset,
    limit: initLimit,
  });
  const [characters, setCharacters] = useState([]);
  const [charactersRequest, fetchCharactersById] = useFetch(getCharactersById);

  const handleCharactersFetch = (charactersId) => {
    const ids = prepareIds(charactersId);
    if (ids.length === 0) return;

    fetchCharactersById(ids)
      .then(addCharacters)
      .then(nextPage)
      .catch(ErrorCatcher.catchError);
  };

  const nextPage = () => {
    const { offset, limit } = pagination.current;
    pagination.current.offset = offset + limit;
  };
  const resetPage = () => {
    pagination.current.offset = initOffset;
  };

  const addCharacters = (characters) => {
    setCharacters((prevCharacters) => [
      ...prevCharacters,
      ...prepareCharacters(characters),
    ]);
  };

  const prepareCharacters = (characters) => {
    return Array.isArray(characters) ? characters : [characters];
  };

  const prepareIds = (charactersId) => {
    const { offset, limit } = pagination.current;
    const ids = getURLCharactersId(charactersId);
    return ids.slice(offset, offset + limit);
  };

  return [
    characters,
    charactersRequest.meta,
    {
      nextCharacters: () => {
        handleCharactersFetch(characterIds);
      },
      resetCharacters: () => {
        resetPage();
        setCharacters([]);
      },
    },
  ];
};

export default useFetchCharactersByIdLazy;
