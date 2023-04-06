import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import FetchVehicles from '../../utlis/FetchData/FetchVehicles';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {StatusResponse} from '../../entites/types/CommonTypes';

export const fetchVehiclesData = createAsyncThunk(
  'vehiclesDataSlice/fetchVehiclesData',
  async (numberOfPage: number) => {
    const {results} = await FetchVehicles(numberOfPage);
    return results;
  },
);

type InitialStateType = {
  vehicles: VehiclesTypes[];
  loading: boolean;
  filteredVehicles: VehiclesTypes[];
  status: StatusResponse;
  test: boolean;
};

const initialState: InitialStateType = {
  vehicles: [],
  filteredVehicles: [],
  loading: true,
  status: StatusResponse.IDLE,
  test: false,
};

const vehiclesDataSlice = createSlice({
  name: 'vehiclesDataSlice',
  initialState,
  reducers: {
    setFilteredVehicles: (state, action: PayloadAction<string>) => {
      state.filteredVehicles = state.vehicles.filter((item: VehiclesTypes) => {
        return item.pilots.some((url: string) => url === action.payload);
      });
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

export const {setFilteredVehicles} = vehiclesDataSlice.actions;

export const selectVehicles = (state: RootState) => state.vehiclesData.vehicles;

export default vehiclesDataSlice.reducer;
