import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { CharasterTypes } from '../../entites/types/CharasterTypes';

type initialStataType = {
  charaster: CharasterTypes[] | [];
};

const initialState: initialStataType = {
  charaster: [],
};

export const charactersDataSlice = createSlice({
  name: 'charactersDataSlice',
  initialState,
  reducers: {
    addCharasters: (state, action: PayloadAction<CharasterTypes[]>) => {
      state.charaster = action.payload;
      state.charaster.map((person) => {
        person.id = (Math.random() * 1000).toFixed(5);
      });
    },
  },
});

export const { addCharasters } = charactersDataSlice.actions;

export const selectData = (state: RootState) => state.fetchData.charaster;

export default charactersDataSlice.reducer;
