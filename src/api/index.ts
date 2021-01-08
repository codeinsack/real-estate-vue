import axios, { AxiosResponse } from 'axios';

const baseUrl = `/apartment`;

export const fetchApartments = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get(baseUrl);
  } catch (error) {
    console.error(error);
    return error;
  }
};
