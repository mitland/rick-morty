import { createSelector, createSlice } from '@reduxjs/toolkit';
import { getEpisodesByPage } from '../../shared/services/EpisodesService';

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    byId: {},
    list: {
      meta: {
        pageCount: 0,
      },
      pages: {},
    },
  },
  reducers: {
    fetchEpisodesPageStart: (state, action) => {
      const { page } = action.payload;

      createNewPage(state, page);
      updatePage(state, page, {
        isFetching: true,
      });
    },
    fetchEpisodesPageSuccess: (state, action) => {
      const {
        page,
        pageData: { episodes },
        meta,
      } = action.payload;

      updatePage(state, page, {
        isFetching: false,
        error: null,
        episodes: episodes.map((episodes) => episodes.id),
      });
      addEpisodesById(state, episodes);
      addListMeta(state, meta);
    },
    fetchEpisodesPageFailure: (state, action) => {
      const { page, error } = action.payload;

      updatePage(state, page, {
        isFetching: false,
        error,
      });
    },
    addEpisode: (state, action) => {
      const { episode } = action.payload;
      addEpisodesById(state, [episode]);
    },
  },
});

export const createNewPage = (state, page) => {
  state.list.pages[page] = {
    page,
    episodes: [],
    isFetching: false,
    error: null,
  };
};

export const updatePage = (state, page, data) =>
  Object.assign(state.list.pages[page], data);

export const addEpisodesById = (state, episodes) => {
  episodes.forEach((episode) => {
    state.byId[episode.id] = episode;
  });
};

export const addListMeta = (state, meta) => {
  state.list.meta.pageCount = meta.pageCount || 0;
};

export const {
  addEpisode,
  fetchEpisodesPageStart,
  fetchEpisodesPageSuccess,
  fetchEpisodesPageFailure,
} = episodesSlice.actions;

export const fetchEpisodesByPage = (page) => async (dispatch) => {
  try {
    dispatch(fetchEpisodesPageStart({ page }));
    const response = await getEpisodesByPage(page);
    const payload = mapResponseToPayload(response);
    dispatch(fetchEpisodesPageSuccess(payload));
  } catch (error) {
    dispatch(fetchEpisodesPageFailure({ page, error: error.message }));
  }

  function mapResponseToPayload(response) {
    return {
      page,
      pageData: {
        episodes: response.results || [],
      },
      meta: {
        pageCount: response.info.pages,
      },
    };
  }
};

export const selectPages = (state) => {
  return state.episodes.list.pages;
};

export const selectPageDataByNumber = (state, page) => selectPages(state)[page];

export const selectListMeta = (state) => {
  return state.episodes.list.meta;
};

export const selectEpisodes = (state) => state.episodes.byId;
export const selectEpisodeById = (state, id) => state.episodes.byId[id];
export const selectEpisodesById = createSelector(
  [selectEpisodes, (state, ids) => ids],
  (episodes, ids = []) => ids.map((id) => episodes[id])
);

export default episodesSlice.reducer;
