import axios from 'axios';
import {CharasterTypes} from '../../entites/types/CharasterTypes';

const FetchCharacters = async (
  numberOfPage: number,
): Promise<CharasterTypes[]> => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: {results},
    } = await axios.get<{results: CharasterTypes[]}>(url, {
      headers: {'Content-Type': 'application/json'},
      params: {page: numberOfPage},
    });
    return results;
  } catch (error) {
    throw new Error('An error occurred while fetching characters.');
  }
};

export default FetchCharacters;
