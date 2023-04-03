import {configureStore} from '@reduxjs/toolkit';
import charactersDataSlice from '../slices/charactersDataSlice';
import favoriteCharactersSlice from '../slices/favoriteCharactersSlice';
import filmsCharactersSlice from '../slices/filmsCharactersSlice';
import vehiclesDataSlice from '../slices/vehiclesCharastersSlice';
import starshipsDataSlice from '../slices/starshipsCharastersSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    fetchData: charactersDataSlice,
    favouriteCharaster: favoriteCharactersSlice,
    filmsData: filmsCharactersSlice,
    vehiclesData: vehiclesDataSlice,
    starshipsData: starshipsDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
