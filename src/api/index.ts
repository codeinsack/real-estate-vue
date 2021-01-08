import axios, { AxiosResponse } from 'axios';

export const fetchApartments = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get('http://localhost:8090/apartment/all', {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const register = async (body: any): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post('http://localhost:8090/user/register', body, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const login = async (body: any): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post('http://localhost:8090/user/login', body, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const logout = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.post('http://localhost:8090/user/logout', null, {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
