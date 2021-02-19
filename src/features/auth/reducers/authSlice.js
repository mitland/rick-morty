import { createSelector, createSlice } from '@reduxjs/toolkit';
import AuthStorage from '../../../helpers/storage/AuthStorage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: AuthStorage.getUser(),
  },
  reducers: {
    login: (state, action) => {
      state.user = createUserShape(action.payload.name);
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

const createUserShape = (name) => ({
  name,
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => {
  return state.auth.user;
};

export const selectIsAuthenticated = createSelector(selectUser, (user) => {
  return user !== null;
});

export default authSlice.reducer;
