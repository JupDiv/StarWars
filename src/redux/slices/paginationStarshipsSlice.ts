import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';

export const fetchStarshipsPagination = createAsyncThunk(
  'paginationSlice/fetchStarshipsData',
  async (payload: {numberOfPage: number}) => {
    const {previous, next} = await FetchStarShips(payload.numberOfPage);
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

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setStarships: (state, action: PayloadAction<InitialStateType>) => {
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchStarshipsPagination.fulfilled, (state, action) => {
      state.previous = action.payload.previous;
      state.next = action.payload.next;
    });
  },
});

export const {setStarships} = paginationSlice.actions;

export const selectStarshipsData = (state: RootState) => state.starshipsData;

export default paginationSlice.reducer;
