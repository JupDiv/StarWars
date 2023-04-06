import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchStarShips from '../../utlis/FetchData/FetchStarShips';
import {StarshipsTypes} from '../../entites/types/StarshipsTypes';
import {StatusResponse} from '../../entites/types/CommonTypes';

export const fetchStarshipsData = createAsyncThunk(
  'starshipsDataSlice/fetchStarshipsData',
  async (payload: {numberOfPage: number; urlCharaster: string}) => {
    const {results} = await FetchStarShips(payload.numberOfPage);
    return {results, urlCharaster: payload.urlCharaster};
  },
);

export type InitialStateType = {
  starships: StarshipsTypes[];
  filteredStarships: StarshipsTypes[];
  loading: boolean;
  status: StatusResponse;
};

const initialState: InitialStateType = {
  starships: [],
  filteredStarships: [],
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
        state.starships = action.payload.results;
        state.starships.map(starship => {
          starship.id = (Math.random() * 1000).toFixed(5);
        });
        state.loading = false;
        state.status = StatusResponse.FULFILLED;

        state.filteredStarships = state.starships.filter(
          (item: StarshipsTypes) => {
            return item.pilots.some(
              (url: string) => url === action.payload.urlCharaster,
            );
          },
        );
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
