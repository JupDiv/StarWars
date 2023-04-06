import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchFilms from '../../utlis/FetchData/FetchFilms';
import {
  StatusResponse,
  InitialStateType,
} from '../../entites/types/CommonTypes';
import {FilmsTypes} from '../../entites/types/FilmsTypes';

export const fetchFilms = createAsyncThunk(
  'filmsCharactersSlice/fetchFilms',
  async () => {
    const response = await FetchFilms();
    return response;
  },
);

const initialState: InitialStateType = {
  films: [],
  loading: true,
  status: StatusResponse.IDLE,
};

const filmsCharactersSlice = createSlice({
  name: 'filmsCharactersSlice',
  initialState,
  //Спробувати у редюсері размістити функцію котра у  ExtraReducers буде викликатися
  // Та у редюсері прописати маніпуляції з стейтом котрі будуть зараз є ScreenFilms ???
  reducers: {
    setFilms: (state, action: PayloadAction<FilmsTypes[]>) => {
      state.films = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFilms.pending, state => {
        state.status = StatusResponse.PENDING;
        state.loading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload;
        state.loading = false;
        state.status = StatusResponse.FULFILLED;
      })
      .addCase(fetchFilms.rejected, state => {
        state.loading = false;
        state.status = StatusResponse.REJECTED;
      });
  },
});

export const {setFilms} = filmsCharactersSlice.actions;

export const selectFilms = (state: RootState) => state.filmsData.films;

export default filmsCharactersSlice.reducer;
