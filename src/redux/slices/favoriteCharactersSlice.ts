import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

type initialStataType = {
  male: string[];
  female: string[];
  other: string[];
};

type favouritePersonTypeProp = {
  gender: string;
  name: string;
};

const initialState: initialStataType = {
  male: [],
  female: [],
  other: [],
};

const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharactersSlice',
  initialState,
  reducers: {
    addFavouriteCharaster: (
      state,
      action: PayloadAction<favouritePersonTypeProp>
    ) => {
      if (action.payload.gender === 'male') {
        if (state.male.includes(action.payload.name)) return;
        state.male.push(action.payload.name);
      }
      if (action.payload.gender === 'female') {
        if (state.female.includes(action.payload.name)) return;
        state.female.push(action.payload.name);
      }
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female'
      ) {
        if (state.other.includes(action.payload.name)) return;
        state.other.push(action.payload.name);
      }
    },
    removeFavouriteCharaster: (
      state,
      action: PayloadAction<favouritePersonTypeProp>
    ) => {
      if (action.payload.gender === 'male') {
        state.male = state.male.filter((item) => item !== action.payload.name);
      }
      if (action.payload.gender === 'female') {
        state.female = state.female.filter(
          (item) => item !== action.payload.name
        );
      }
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female'
      ) {
        state.other = state.other.filter(
          (item) => item !== action.payload.name
        );
      }
    },
    resetValueButton: (state, action: PayloadAction<[]>) => {
      state.male = action.payload;
      state.female = action.payload;
      state.other = action.payload;
    },
  },
});

export const {
  addFavouriteCharaster,
  removeFavouriteCharaster,
  resetValueButton,
} = favoriteCharactersSlice.actions;

export const selectData = (state: RootState) => state.favouriteCharaster;

export default favoriteCharactersSlice.reducer;
