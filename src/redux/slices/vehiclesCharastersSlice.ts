import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import {
  VehiclesTypes,
  InitialStateType,
} from '../../entites/types/VehiclesTypes';
import {StatusResponse} from '../../entites/types/CommonTypes';

export const fetchVehiclesData = createAsyncThunk(
  'vehiclesDataSlice/fetchVehiclesData',
  async (numberOfPage: number) => {
    const {results} = await FetchVehicles(numberOfPage);
    return results;
  },
);

const initialState: InitialStateType = {
  vehicles: [],
  loading: true,
  status: StatusResponse.IDLE,
};

const vehiclesDataSlice = createSlice({
  name: 'vehiclesDataSlice',
  initialState,
  reducers: {
    setVehicles: (state, action: PayloadAction<VehiclesTypes[]>) => {
      state.vehicles = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchVehiclesData.pending, state => {
        state.loading = true;
        state.status = StatusResponse.PENDING;
      })
      .addCase(fetchVehiclesData.fulfilled, (state, action) => {
        state.vehicles = action.payload;
        state.vehicles.map(vehicle => {
          vehicle.id = (Math.random() * 1000).toFixed(5);
        });
        state.loading = false;
        state.status = StatusResponse.FULFILLED;
      })
      .addCase(fetchVehiclesData.rejected, state => {
        state.loading = false;
        state.status = StatusResponse.REJECTED;
      });
  },
});

export const {setVehicles} = vehiclesDataSlice.actions;

export const selectVehicles = (state: RootState) => state.vehiclesData.vehicles;

export default vehiclesDataSlice.reducer;
