import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import {
  CharasterTypes,
  initialStataType,
} from '../../entites/types/CharasterTypes';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
import {StatusResponse} from '../../entites/types/CommonTypes';

export const fetchCharacters = createAsyncThunk(
  'charactersDataSlice/fetchCharacters',
  async (numberOfPage: number) => {
    const {results} = await FetchCharacters(numberOfPage);
    return results;
  },
);

const initialState: initialStataType = {
  charaster: [],
  loading: true,
  status: StatusResponse.IDLE,
};

export const charactersDataSlice = createSlice({
  name: 'charactersDataSlice',
  initialState,
  reducers: {
    addCharasters: (state, action: PayloadAction<CharasterTypes[]>) => {
      state.charaster = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.loading = true;
        state.status = StatusResponse.PENDING;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.charaster = action.payload;
        state.charaster.map(person => {
          person.id = (Math.random() * 1000).toFixed(5);
        });
        state.loading = false;
        state.status = StatusResponse.FULFILLED;
      })
      .addCase(fetchCharacters.rejected, state => {
        state.loading = false;
        state.status = StatusResponse.REJECTED;
      });
  },
});

export const {addCharasters} = charactersDataSlice.actions;

export const selectData = (state: RootState) => state.fetchData.charaster;

export default charactersDataSlice.reducer;
