import axios from 'axios';
import {StarshipsTypes} from '../../entites/types/StarshipsTypes';
import {CommonTypes} from '../../entites/types/CommonTypes';

const FetchStarShips = async (): Promise<StarshipsTypes[]> => {
  const url: string = 'https://swapi.dev/api/starships/';
  try {
    const {
      data: {results},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return results;
  } catch (error) {
    throw new Error('An error occurred while fetching starships.');
  }
};

export default FetchStarShips;
