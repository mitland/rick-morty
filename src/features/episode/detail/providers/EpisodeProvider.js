import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addEpisode,
  selectEpisodeById,
} from '../../list/reducers/episodesSlice';
import useFetch from '../../../../helpers/fetch/useFetch';
import { getEpisodeById } from '../../shared/services/EpisodesService';
import ErrorCatcher from '../../../../helpers/fetch/ErrorCatcher';

const EpisodeContext = createContext(null);

const EpisodeProvider = ({ episodeId, children }) => {
  const dispatch = useDispatch();
  const episode = useSelector((state) => selectEpisodeById(state, episodeId));
  const [request, fetchEpisodeById] = useFetch(getEpisodeById);

  useEffect(() => {
    if (episode && episodeId === String(episode.id)) return;

    fetchEpisodeById(episodeId)
      .then(handleAddEpisode)
      .catch(ErrorCatcher.catchError);
    function handleAddEpisode(episode) {
      dispatch(addEpisode({ episode }));
    }
  }, [episodeId, episode, dispatch, fetchEpisodeById]);

  const providerValue = useMemo(() => {
    return [episode, request.meta];
  }, [episode, request]);

  return (
    <EpisodeContext.Provider value={providerValue}>
      {children}
    </EpisodeContext.Provider>
  );
};

EpisodeProvider.propTypes = {
  episodeId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const useEpisode = () => {
  return useContext(EpisodeContext);
};

export default EpisodeProvider;
export { useEpisode };
