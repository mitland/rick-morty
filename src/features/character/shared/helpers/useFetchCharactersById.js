import { useEffect } from 'react';
import useFetch from '../../../../helpers/fetch/useFetch';
import { getCharactersById } from '../services/CharacterService';
import getURLCharactersId from './getURLCharactersId';

const useFetchCharactersById = (characterIds) => {
  const [request, fetchCharactersById] = useFetch(getCharactersById);

  useEffect(() => {
    if (!characterIds) return;

    const ids = getURLCharactersId(characterIds);
    fetchCharactersById(ids);
  }, [characterIds, fetchCharactersById]);

  return [request.response, request.meta];
};

export default useFetchCharactersById;
