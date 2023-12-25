import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import api from "./Api";

const defaultApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const handleRequest = async (request) => {
  try {
    const response = await request();
    console.log("safsa", response);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getData = async (query) => {
  const response = await defaultApi.get(query);
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
    const response = await defaultApi.patch(`${query}${id}`);
    return response.status === 200;
  });
};
export const patchOrder = async (query, data) => {
  return handleRequest(async () => {
    const response = await defaultApi.patch(query, data);
    return response.status === 200;
  });
};
export const deleteData = async (query, id) => {
  return handleRequest(async () => {
    const response = await api.delete(`${query}${id}`);
    return response.status === 200;
  });
};
