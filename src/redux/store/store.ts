import {configureStore} from '@reduxjs/toolkit';
import charactersDataSlice from '../slices/charactersDataSlice';
import favoriteCharactersSlice from '../slices/favoriteCharactersSlice';
import filmsCharactersSlice from '../slices/filmsCharactersSlice';
import vehiclesDataSlice from '../slices/vehiclesCharastersSlice';
import starshipsDataSlice from '../slices/starshipsCharastersSlice';
import animationSlice from '../slices/animationSlice';

const store = configureStore({
  reducer: {
    fetchData: charactersDataSlice,
    favouriteCharaster: favoriteCharactersSlice,
    filmsData: filmsCharactersSlice,
    vehiclesData: vehiclesDataSlice,
    starshipsData: starshipsDataSlice,
    animation: animationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
