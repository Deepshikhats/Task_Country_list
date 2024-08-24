import axios from 'axios';

const getCountries = async () => {
  try {
    const response = await axios.get(
      'https://restcountries.com/v2/all?fields=name,region,flag'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getCountries;
