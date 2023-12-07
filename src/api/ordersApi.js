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

    const orders = response.data.data.orders;
    // Fetch user data for each order
    await Promise.all(
      orders.map(async (order) => {
        order.totalPrice = order.totalPrice.toLocaleString("fa-IR");
        const userData = await axios.get(`${BASE_URL}users/${order.user}`);

        order.user = `${userData.data.data.user.firstname} ${userData.data.data.user.lastname}`;
      })
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Request completed");
  }
};
