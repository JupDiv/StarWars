import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchPlanetData from '../../utlis/FetchData/FetchAllPlanet';
import {SpecialTypes} from '../../entites/types/SpecialTypes';

interface FetchAllPlanetsState {
  species: SpecialTypes[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FetchAllPlanetsState = {
  species: [],
  status: 'idle',
};

export const fetchAllSpecies = createAsyncThunk(
  'fetchAllSpecies/fetchAll',
  async () => {
    const fetchPlanetsPage = async (url: string): Promise<SpecialTypes[]> => {
      const response = await FetchPlanetData(url);
      const {results, next} = response;

      if (next) {
        return [...results, ...(await fetchPlanetsPage(next))];
      } else {
        return results;
      }
    };

    const allSpecies = await fetchPlanetsPage('https://swapi.dev/api/species/');
    return allSpecies;
  },
);

const fetchAllSpeciesSlice = createSlice({
  name: 'fetchAllSpecies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllSpecies.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllSpecies.fulfilled,
        (state, action: PayloadAction<SpecialTypes[]>) => {
          state.status = 'idle';
          state.species = state.species.concat(action.payload);
        },
      )
      .addCase(fetchAllSpecies.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectsPlanet = (state: RootState) => state.fetchSpecies.species;

export default fetchAllSpeciesSlice.reducer;
