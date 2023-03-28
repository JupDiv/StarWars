import axios from 'axios';
import {FilmsTypes} from '../../entites/types/FilmsTypes';
import {CharasterTypes} from '../../entites/types/CharasterTypes';
import {CommonTypes} from '../../entites/types/CommonTypes';

const FetchFilms = async (): Promise<FilmsTypes[]> => {
  const url: string = 'https://swapi.dev/api/films/';
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

export default FetchFilms;
