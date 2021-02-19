import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/reducers/authSlice';
import episodesReducer from '../features/episode/list/reducers/episodesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    episodes: episodesReducer,
  },
});
