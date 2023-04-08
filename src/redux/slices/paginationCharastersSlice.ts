import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import FetchCharacters from '../../utlis/FetchData/FetchCharacters';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';

export const fetchStarshipsPagination = createAsyncThunk(
  'paginationSlice/fetchStarshipsData',
  async (payload: {numberOfPage: number}) => {
    const {previous, next} = await FetchStarShips(payload.numberOfPage);
    return {previous, next};
  },
);
export const fetchVehiclesPagination = createAsyncThunk(
  'paginationSlice/fetchVehiclesPagination',
  async (payload: {numberOfPage: number}) => {
    const {previous, next} = await FetchVehicles(payload.numberOfPage);
    return {previous, next};
  },
);
export const fetchCharastersPagination = createAsyncThunk(
  'paginationSlice/fetchCharastersPagination',
  async (payload: {numberOfPage: number}) => {
    const {previous, next} = await FetchCharacters(payload.numberOfPage);
    return {previous, next};
  },
);

export type InitialStateType = {
  previous: string | null;
  next: string | null;
};

const initialState: InitialStateType = {
  previous: '',
  next: '',
};

const paginationCharasterSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setStarships: (state, action: PayloadAction<InitialStateType>) => {
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStarshipsPagination.fulfilled, (state, action) => {
        state.previous = action.payload.previous;
        state.next = action.payload.next;
      })
      .addCase(fetchVehiclesPagination.fulfilled, (state, action) => {
        state.previous = action.payload.previous;
        state.next = action.payload.next;
      })
      .addCase(fetchCharastersPagination.fulfilled, (state, action) => {
        state.previous = action.payload.previous;
        state.next = action.payload.next;
      });
  },
});

export const {setStarships} = paginationCharasterSlice.actions;

export const selectStarshipsData = (state: RootState) => state.starshipsData;

export default paginationCharasterSlice.reducer;
