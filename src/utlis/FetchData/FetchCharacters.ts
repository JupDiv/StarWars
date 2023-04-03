import axios from 'axios';
import {CommonTypes} from '../../entites/types/CommonTypes';

type responseCharacters = Pick<CommonTypes, 'next' | 'previous' | 'results'>;

const FetchCharacters = async (
  numberOfPage: number,
): Promise<responseCharacters> => {
  try {
    const url = 'https://swapi.dev/api/people/';
    const {
      data: {next, previous, results},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
      params: {page: numberOfPage},
    });
    return {next, previous, results};
  } catch (error) {
    throw new Error('An error occurred while fetching characters.');
  }
};

export default FetchCharacters;
