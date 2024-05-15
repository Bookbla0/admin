import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({
  baseURL,
  // withCredentials: true, // 'credentials: 'include'' 대신 사용
});

const handleError = (error) => {
  return Promise.reject(error);
};

export const Get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const Post = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const Put = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const Delete = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const Patch = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
