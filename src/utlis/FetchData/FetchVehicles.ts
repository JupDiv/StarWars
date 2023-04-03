import axios from 'axios';
import {CommonTypes} from '../../entites/types/CommonTypes';

type responseVehicles = Pick<CommonTypes, 'next' | 'previous' | 'results'>;

const FetchVehicles = async (
  numberOfPage: number,
): Promise<responseVehicles> => {
  const url: string = 'https://swapi.dev/api/vehicles/';
  if (numberOfPage < 1) {
    numberOfPage = 1;
  }
  try {
    const {
      data: {results, next, previous},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
      params: {page: numberOfPage},
    });
    return {results, next, previous};
  } catch (error) {
    throw new Error('An error occurred while fetching films.');
  }
};

export default FetchVehicles;
