import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:8090';

export const fetchApartments = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get(`${baseUrl}/apartment/all`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const register = async (body: any): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post(`${baseUrl}/user/register`, body, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const login = async (body: any): Promise<AxiosResponse<any>> => {
  return axios.post(`${baseUrl}/user/login`, body, {
    withCredentials: true,
  });
};

export const logout = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post(`${baseUrl}/user/logout`, null, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchAllCountries = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get(`${baseUrl}/countries`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createNewApartment = async (body: any): Promise<AxiosResponse<any>> => {
  return axios.post(`${baseUrl}/apartment`, body, {
    withCredentials: true,
  });
};

export const fetchCurrentUser = async (): Promise<AxiosResponse<any>> => {
  return axios.get(`${baseUrl}/user/currentUser`, {
    withCredentials: true,
  });
};

export const fetchDealsByStatus = async (
  status = 'IN_PROGRESS',
  direction = 'ASC'
): Promise<AxiosResponse<any>> => {
  return axios.get(`${baseUrl}/deals`, {
    withCredentials: true,
    params: {
      status,
      direction,
    },
  });
};

export const createDeal = async (apartmentId: number): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post(`${baseUrl}/deal/${apartmentId}`, null, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const changeDealStatus = async (dealId: number, status): Promise<AxiosResponse<any>> => {
  try {
    return await axios.put(`${baseUrl}/deal/status/${dealId}/${status}`, null, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
