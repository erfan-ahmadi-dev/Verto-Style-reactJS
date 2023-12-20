import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import faTexts from "../utils/Constants";
import api from "./Api";
const handleRequest = async (request) => {
  try {
    const response = await request();
    console.log("safsa", response);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getProductsWithCatAndSubCat = async (
  pageNum,
  limitNum,
  sortType
) => {
  try {
    const response = await axios.get(`${BASE_URL}products`, {
      params: {
        page: pageNum,
        limit: limitNum,
        sort: sortType,
      },
    });

    return response.data;
  } catch (error) {
    console.error(faTexts.erroFetchingProduct, error.message);

    throw error;
  }
};
export const sendProductData = async (query, data) => {
  return handleRequest(async () => {
    const response = await api.post(query, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  });
};

export const updateProductData = async (productId, data) => {
  return handleRequest(async () => {
    const response = await api.patch(`products/${productId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  });
};
