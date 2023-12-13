import axios from "axios";
import { BASE_URL } from "../utils/Constants";

const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const getData = async (query) => {
  const response = await axios.get(`${BASE_URL}${query}`);
  return response.data;
};

export const createData = async (query, data) => {
  return handleRequest(async () => {
    const response = await axios.post(`${BASE_URL}${query}`, data);
    return response.data.id;
  });
};

export const patchData = async (query, id) => {
  return handleRequest(async () => {
    const response = await axios.patch(`${BASE_URL}${query}${id}`);
    return response.status === 200;
  });
};

export const deleteData = async (query, id) => {
  return handleRequest(async () => {
    const response = await axios.delete(`${BASE_URL}${query}${id}`);
    return response.status === 200;
  });
};
