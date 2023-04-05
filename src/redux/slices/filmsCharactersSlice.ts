import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchFilms from '../../utlis/FetchData/FetchFilms';

export const fetchFilms = createAsyncThunk(
  'filmsCharactersSlice/fetchFilms',
  async () => {
    const response = await FetchFilms();
    return response;
  },
);

import {FilmsTypes} from '../../entites/types/FilmsTypes';

type InitialStateType = {
  films: FilmsTypes[];
};

const initialState: InitialStateType = {
  films: [],
};

const filmsCharactersSlice = createSlice({
  name: 'filmsCharactersSlice',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmsTypes[]>) => {
      state.films = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const {setFilms} = filmsCharactersSlice.actions;

export const selectFilms = (state: RootState) => state.filmsData.films;

export default filmsCharactersSlice.reducer;
