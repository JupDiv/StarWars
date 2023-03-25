import axios from 'axios';

type PlanetResponse = string | undefined;

const FetchPlanetData = async (url: string): Promise<PlanetResponse> => {
  try {
    const {
      data: {name},
    } = await axios.get<{name: string}>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return name;
  } catch (error) {
    console.log(error);
  }
};

export default FetchPlanetData;
