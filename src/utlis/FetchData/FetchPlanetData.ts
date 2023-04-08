import axios from 'axios';

type PlanetResponse = string;

const FetchPlanetData = async (url: string): Promise<PlanetResponse> => {
  try {
    const {
      data: {name},
    } = await axios.get<{name: string}>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return name;
  } catch (error) {
    throw new Error('An error occurred while fetching planet.');
  }
};

export default FetchPlanetData;
