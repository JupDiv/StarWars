import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

import {StarshipsTypes} from '../../entites/types/StarshipsTypes';

type InitialStateType = {
  starships: StarshipsTypes[];
};

const initialState: InitialStateType = {
  starships: [],
};

const starshipsDataSlice = createSlice({
  name: 'starshipsDataSlice',
  initialState,
  reducers: {
    setStarships: (state, action: PayloadAction<StarshipsTypes[]>) => {
      state.starships = action.payload;
    },
  },
});

export const {setStarships} = starshipsDataSlice.actions;

export const selectStarships = (state: RootState) =>
  state.starshipsData.starships;

export default starshipsDataSlice.reducer;
