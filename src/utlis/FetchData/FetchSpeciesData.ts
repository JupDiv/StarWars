import axios from 'axios';

const FetchSpeciesData = async (url: string) => {
  try {
    const {
      data: {name},
    } = await axios.get<{name: string}>(url, {
      headers: {'Content-Type': 'application/json'},
    });
    return name;
  } catch (error) {
    throw new Error('An error occurred while fetching species.');
  }
};

export default FetchSpeciesData;
