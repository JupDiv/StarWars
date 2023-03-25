import { configureStore } from '@reduxjs/toolkit';
import charactersDataSlice from '../slices/charactersDataSlice';
import favoriteCharactersSlice from '../slices/favoriteCharactersSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    fetchData: charactersDataSlice,
    favouriteCharaster: favoriteCharactersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
