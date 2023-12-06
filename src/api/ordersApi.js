import axios from "axios";
export const getOrdersWithName = async (pageNum, limitNum, sortType) => {
  try {
    const response = await axios.get("http://localhost:8000/api/orders", {
      params: {
        page: pageNum,
        limit: limitNum,
        sort: sortType,
      },
    });

    // console.table(response.data.data.orders[1]);

    const orders = response.data.data.orders;
    // Fetch user data for each order
    await Promise.all(
      orders.map(async (order) => {
        const userData = await axios.get(
          `http://localhost:8000/api/users/${order.user}`
        );

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
