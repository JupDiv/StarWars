import axios from 'axios';
import {CommonTypes} from '../../entites/types/CommonTypes';

type responseStarShips = Pick<CommonTypes, 'next' | 'previous' | 'results'>;

const FetchStarShips = async (
  numberOfPage: number,
): Promise<responseStarShips> => {
  const url: string = 'https://swapi.dev/api/starships/';
  try {
    const {
      data: {next, previous, results},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
      params: {page: numberOfPage},
    });
    return {next, previous, results};
  } catch (error) {
    throw new Error('An error occurred while fetching starships.');
  }
};

export default FetchStarShips;
