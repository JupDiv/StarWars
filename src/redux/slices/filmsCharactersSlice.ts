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

enum Status {
  IDLE = 'idle',
  REJECTED = 'rejected',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
}

type InitialStateType = {
  films: FilmsTypes[];
  loading: boolean;
  status: Status;
};

const initialState: InitialStateType = {
  films: [],
  loading: true,
  status: Status.IDLE,
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
    builder
      .addCase(fetchFilms.pending, state => {
        state.status = Status.PENDING;
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.loading = false;
        state.status = Status.FULFILLED;
      })
      .addCase(fetchFilms.rejected, state => {
        state.loading = false;
        state.status = Status.REJECTED;
      });
  },
});

export const {setFilms} = filmsCharactersSlice.actions;

export const selectFilms = (state: RootState) => state.filmsData.films;

export default filmsCharactersSlice.reducer;
