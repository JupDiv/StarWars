import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

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
});

export const {setFilms} = filmsCharactersSlice.actions;

export const selectFilms = (state: RootState) => state.filmsData.films;

export default filmsCharactersSlice.reducer;
