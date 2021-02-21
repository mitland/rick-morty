import React, { useState, useEffect, useRef, useCallback } from 'react';
import QueryString from 'query-string';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CharacterCard from '../card/CharacterCard';
import { getCharacters } from '../../../shared/services/CharacterService';
import useFetch from '../../../../../helpers/fetch/useFetch';
import getURLLocationId from '../../../../location/shared/helpers/getURLLocationId';
import CharacterListErrorCases from './cases/CharacterListErrorCases';

export default function CharacterListContainer() {
  const history = useHistory();
  const location = useLocation();
  const requestsRef = useRef({
    init: null,
    pagination: null,
  });
  const { name = '' } = QueryString.parse(location.search);
  const [{ response, meta }, fetchCharacters] = useFetch(getCharacters);
  const [characters, setCharacters] = useState([]);

  const abortRequests = useCallback(() => {
    const { init, pagination } = requestsRef.current;

    init && init.controller.abort();
    pagination && pagination.controller.abort();
  }, []);

  useEffect(() => window.scrollTo(0, 0), [name]);

  useEffect(() => {
    const request = fetchCharacters({
      name,
    })
      .then(getResponseCharacters)
      .then(setCharacters)
      .catch(resetCharacters);

    requestsRef.current.init = request;

    return abortRequests;
  }, [name, fetchCharacters, abortRequests]);

  const handleNextPageClick = (name, page) => {
    const request = fetchCharacters({
      name,
      page,
    })
      .then(getResponseCharacters)
      .then(addCharacters);

    requestsRef.current.pagination = request;
  };

  const getResponseCharacters = ({ results: characters }) => characters;
  const resetCharacters = () => setCharacters([]);
  const addCharacters = (characters) => {
    setCharacters((prevCharacters) => [...prevCharacters, ...characters]);
  };

  const handleLocationClick = (location) => {
    const id = getURLLocationId(location.url);
    if (id) history.push(`/location/${id}`);
  };

  const getNextPageInfo = () => {
    if (!response) return createPageData(0);
    if (!response.info.next) return createPageData(0, false);

    const nextPage = getPageFromURL(response.info.next);
    return createPageData(nextPage);

    function createPageData(nextPage, haveNext = true) {
      return {
        haveNext,
        nextPage,
      };
    }
    function getPageFromURL(url) {
      const { page } = QueryString.parse(url.split('?')[1]);
      return page;
    }
  };

  const { haveNext, nextPage } = getNextPageInfo();

  if (meta.isFetching) {
    return <CircularProgress />;
  }

  if (meta.error) {
    return <CharacterListErrorCases error={meta.error.message} />;
  }

  return (
    <div>
      {characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            character={character}
            onLocationClick={handleLocationClick}
          />
        );
      })}

      {haveNext ? (
        <Button onClick={() => handleNextPageClick(name, nextPage)}>
          Next
        </Button>
      ) : null}
    </div>
  );
}
