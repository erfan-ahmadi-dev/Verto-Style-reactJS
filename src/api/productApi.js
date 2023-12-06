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

    const products = response.data.data.products;

    await Promise.all(
      products.map(async (product) => {
        try {
          const userData = await axios.get(
            `${BASE_URL}categories/${product.category}`
          );
          product.category = userData.data.data.category.name;
        } catch (error) {
          console.error(
            `${faTexts.errorFetchCategory} ${product._id}:`,
            error.message
          );
        }
      })
    );

    await Promise.all(
      products.map(async (product) => {
        try {
          const userData = await axios.get(
            `${BASE_URL}subcategories/${product.subcategory}`
          );
          product.subcategory = userData.data.data.subcategory.name;
        } catch (error) {
          console.error(
            `${faTexts.errorFetchSubCategory} ${product._id}:`,
            error.message
          );
        }
      })
    );

    return response.data;
  } catch (error) {
    console.error(faTexts.erroFetchingProduct, error.message);

    throw error;
  }
};
