import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchPlanetData from '../../utlis/FetchData/FetchAllPlanet';
import {PlanetTypes} from '../../entites/types/PlanetTypes';

interface FetchAllPlanetsState {
  planets: PlanetTypes[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FetchAllPlanetsState = {
  planets: [],
  status: 'idle',
};

export const fetchAllPlanets = createAsyncThunk(
  'fetchAllPlanets/fetchAll',
  async () => {
    const fetchPlanetsPage = async (url: string): Promise<PlanetTypes[]> => {
      const response = await FetchPlanetData(url);
      const {results, next} = response;

      if (next) {
        return [...results, ...(await fetchPlanetsPage(next))];
      } else {
        return results;
      }
    };

    const allPlanets = await fetchPlanetsPage('https://swapi.dev/api/planets/');
    return allPlanets;
  },
);

const fetchAllPlanetsSlice = createSlice({
  name: 'fetchAllPlanets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllPlanets.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllPlanets.fulfilled,
        (state, action: PayloadAction<PlanetTypes[]>) => {
          state.status = 'idle';
          state.planets = state.planets.concat(action.payload);
        },
      )
      .addCase(fetchAllPlanets.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectsPlanet = (state: RootState) => state.fetchPlanets.planets;

export default fetchAllPlanetsSlice.reducer;
