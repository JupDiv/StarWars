import {FilmsTypes} from './FilmsTypes';
import {CharasterTypes} from './CharasterTypes';
import {StarshipsTypes} from './StarshipsTypes';
import {VehiclesTypes} from './VehiclesTypes';
export interface CommonTypes {
  count: number;
  next: string;
  previous: string;
  results: [];
}

export enum StatusResponse {
  IDLE = 'idle',
  REJECTED = 'rejected',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
}

export type InitialStateType = {
  films: FilmsTypes[] | CharasterTypes[] | StarshipsTypes[] | VehiclesTypes[];
  loading: boolean;
  status: StatusResponse;
};
