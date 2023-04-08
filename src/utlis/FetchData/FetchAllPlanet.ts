import axios from 'axios';
import {PlanetTypes} from '../../entites/types/PlanetTypes';
import {CommonTypes} from '../../entites/types/CommonTypes';

type responsePlanets = Pick<CommonTypes, 'next' | 'results'>;

const FetchPlanetData = async (url: string): Promise<responsePlanets> => {
  try {
    const {
      data: {results, next},
    } = await axios.get<CommonTypes>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return {results, next};
  } catch (error) {
    throw new Error('An error occurred while fetching planet.');
  }
};

export default FetchPlanetData;
