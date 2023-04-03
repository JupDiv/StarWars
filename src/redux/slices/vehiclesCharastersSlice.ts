import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

import {VehiclesTypes} from '../../entites/types/VehiclesTypes';

type InitialStateType = {
  vehicles: VehiclesTypes[];
};

const initialState: InitialStateType = {
  vehicles: [],
};

const vehiclesDataSlice = createSlice({
  name: 'vehiclesDataSlice',
  initialState,
  reducers: {
    setVehicles: (state, action: PayloadAction<VehiclesTypes[]>) => {
      state.vehicles = action.payload;
      state.vehicles.map(vehicle => {
        vehicle.id = (Math.random() * 1000).toFixed(5);
      });
    },
  },
});

export const {setVehicles} = vehiclesDataSlice.actions;

export const selectVehicles = (state: RootState) => state.vehiclesData.vehicles;

export default vehiclesDataSlice.reducer;
