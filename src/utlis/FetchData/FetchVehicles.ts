import axios from 'axios';
import {VehiclesTypes} from '../../entites/types/VehiclesTypes';
import {CommonTypes} from '../../entites/types/CommonTypes';

const FetchVehicles = async (): Promise<VehiclesTypes[]> => {
  const url: string = 'https://swapi.dev/api/vehicles/';
  try {
    const {
      data: {results},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return results;
  } catch (error) {
    throw new Error('An error occurred while fetching films.');
  }
};

export default FetchVehicles;
