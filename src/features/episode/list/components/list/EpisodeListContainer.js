import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import EpisodeList from './EpisodeList';
import {
  fetchEpisodesByPage,
  selectEpisodesById,
  selectListMeta,
  selectPageDataByNumber,
} from '../../reducers/episodesSlice';
import EpisodeListErrorCases from './cases/EpisodeListErrorCases';

export default function EpisodeListContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { page: queryPage = 1 } = QueryString.parse(location.search);
  const listMeta = useSelector(selectListMeta);
  const pageData = useSelector((state) =>
    selectPageDataByNumber(state, queryPage)
  );
  const pageEpisodes = useSelector((state) =>
    selectEpisodesById(state, pageData && pageData.episodes)
  );

  useEffect(() => window.scrollTo(0, 0), [queryPage]);

  useEffect(() => {
    if (pageData) return;

    dispatch(fetchEpisodesByPage(queryPage));
  }, [queryPage, pageData, dispatch]);

  const handlePageChange = (event, page) => history.push(`?page=${page}`);

  if (!pageData || pageData.isFetching) {
    return <CircularProgress />;
  }

  if (pageData.error) {
    return <EpisodeListErrorCases error={pageData.error} />;
  }

  return (
    <EpisodeList
      episodes={pageEpisodes}
      pageConfig={{
        page: Number(queryPage),
        count: listMeta.pageCount,
        onChange: handlePageChange,
      }}
    />
  );
}
