import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import faTexts from "../utils/Constants";

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
