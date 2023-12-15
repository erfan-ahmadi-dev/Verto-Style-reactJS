import axios from "axios";
import { BASE_URL } from "../utils/Constants";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getData = async (query) => {
  const response = await api.get(query);
  return response.data;
};

export const sendData = async (query, data) => {
  return handleRequest(async () => {
    const response = await api.post(query, data);
    console.log(response);
    return response;
  });
};

export const patchData = async (query, id) => {
  return handleRequest(async () => {
    const response = await api.patch(`${query}${id}`);
    return response.status === 200;
  });
};

export const deleteData = async (query, id) => {
  return handleRequest(async () => {
    const response = await api.delete(`${query}${id}`);
    return response.status === 200;
  });
};
