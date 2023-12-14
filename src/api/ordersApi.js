import axios from "axios";
import { BASE_URL } from "../utils/Constants";

export const getOrdersWithName = async (
  pageNum,
  limitNum,
  sortType,
  isDelivered
) => {
  try {
    const response = await axios.get(`${BASE_URL}orders`, {
      params: {
        page: pageNum,
        limit: limitNum,
        sort: sortType,
        deliveryStatus: isDelivered,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Request completed");
  }
};
