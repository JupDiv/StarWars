import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import {
  StarshipsTypes,
  InitialStateType,
} from '../../entites/types/StarshipsTypes';
import {StatusResponse} from '../../entites/types/CommonTypes';

export const fetchStarshipsData = createAsyncThunk(
  'starshipsDataSlice/fetchStarshipsData',
  async (numberOfPage: number) => {
    const {results} = await FetchStarShips(numberOfPage);
    return results;
  },
);

const initialState: InitialStateType = {
  starships: [],
  loading: true,
  status: StatusResponse.IDLE,
};

const starshipsDataSlice = createSlice({
  name: 'starshipsDataSlice',
  initialState,
  reducers: {
    setStarships: (state, action: PayloadAction<StarshipsTypes[]>) => {
      state.starships = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStarshipsData.pending, state => {
        state.loading = true;
        state.status = StatusResponse.PENDING;
      })
      .addCase(fetchStarshipsData.fulfilled, (state, action) => {
        state.starships = action.payload;
        state.starships.map(starship => {
          starship.id = (Math.random() * 1000).toFixed(5);
        });
        state.loading = false;
        state.status = StatusResponse.FULFILLED;
      })
      .addCase(fetchStarshipsData.rejected, state => {
        state.loading = false;
        state.status = StatusResponse.REJECTED;
      });
  },
});

export const {setStarships} = starshipsDataSlice.actions;

export const selectStarships = (state: RootState) =>
  state.starshipsData.starships;

export default starshipsDataSlice.reducer;
