import React, { useEffect, useState } from "react";
import TableOrdersAdmin from "../../../components/ui/table/TableOrdersAdmin";
import faTexts from "../../../utils/Constants";
import { getOrdersWithName } from "../../../api/ordersApi";
import Pagination from "../../../components/ui/pagination/Pagination";
import Input from "../../../components/ui/input/Input";
import { useQuery } from "@tanstack/react-query";
import { LuLoader as Loading } from "react-icons/lu";
function AdminOrders() {
  const fetchData = () => {
    return getOrdersWithName(page, 4, "createdAt", isDelevierd);
  };
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: fetchData,
  });
  const [isDelevierd, setDeliverd] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="w-full flex flex-col ">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.ordersMangment}</span>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 flex flex-col items-center ">
        <div className="py-5 flex gap-2 w-1/2  items-center ">
          <Input
            label={faTexts.orderPending}
            lableVisibilty="visible"
            name="orderstatus"
            type="radio"
            className="radioButtonStyle"
            ischecked={true}
            onChange={() => {
              setDeliverd(false);
            }}
            gap={4}
          />
          <Input
            label={faTexts.orderCompleted}
            lableVisibilty="visible"
            className="radioButtonStyle"
            name="orderstatus"
            type="radio"
            onChange={() => {
              setDeliverd(true);
            }}
            gap={4}
          />
        </div>

        {query.isLoading ? (
          <Loading className="animate-spin aanimate-infinite animate-duration-1000 w-12 h-12" />
        ) : (
          <>
            <TableOrdersAdmin data={query.data.data} />
            <Pagination setPage={setPage} data={query.data} page={page} />
          </>
        )}
      </div>
    </div>
  );
}

export default AdminOrders;
