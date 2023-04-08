import {configureStore} from '@reduxjs/toolkit';
import charactersDataSlice from '../slices/charactersDataSlice';
import favoriteCharactersSlice from '../slices/favoriteCharactersSlice';
import filmsCharactersSlice from '../slices/filmsCharactersSlice';
import vehiclesDataSlice from '../slices/vehiclesCharastersSlice';
import starshipsDataSlice from '../slices/starshipsCharastersSlice';
import animationSlice from '../slices/animationSlice';
import paginationCharasterSlice from '../slices/paginationCharastersSlice';
import paginationVehiclesSlice from '../slices/paginationVehiclesSlice';
import paginationStarshipsSlice from '../slices/paginationStarshipsSlice';
import fetchAllPlanetsSlice from '../slices/planetsSlice';
import fetchAllSpeciesSlice from '../slices/speciesSlice';

const store = configureStore({
  reducer: {
    fetchData: charactersDataSlice,
    favouriteCharaster: favoriteCharactersSlice,
    filmsData: filmsCharactersSlice,
    vehiclesData: vehiclesDataSlice,
    starshipsData: starshipsDataSlice,
    animation: animationSlice,
    paginationCharasters: paginationCharasterSlice,
    paginationVehicles: paginationVehiclesSlice,
    paginationStarships: paginationStarshipsSlice,
    fetchPlanets: fetchAllPlanetsSlice,
    fetchSpecies: fetchAllSpeciesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
