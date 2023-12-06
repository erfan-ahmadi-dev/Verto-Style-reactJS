import React, { useEffect, useState } from "react";
import TableOrdersAdmin from "../../../components/ui/table/TableOrdersAdmin";
import faTexts from "../../../utils/Constants";
import { getOrdersWithName } from "../../../api/ordersApi";
import Pagination from "../../../components/ui/pagination/Pagination";
function AdminOrders() {
  const [orderData, setData] = useState({ data: [] });
  const [page, setPage] = useState(1);
  useEffect(() => {
    getOrdersWithName(page, 4, "createdAt").then((Response) => {
      setData(Response || { data: [] });
    });
  }, [page]);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.ordersMangment}</span>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        <TableOrdersAdmin data={orderData.data} />
        <Pagination setPage={setPage} data={orderData} page={page} />
      </div>
    </div>
  );
}

export default AdminOrders;
