import { createRef, useEffect, useState } from "react";
import faTexts from "../../../utils/Constants";
import TableOrdersAdmin from "../../../components/ui/table/TablePriceStockAdmin";
import { getData } from "../../../api/defaultApi";
import Pagination from "../../../components/ui/pagination/Pagination";
import { LuLoader as Loading } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

function PriceAndStocks() {
  const tableRef = createRef();
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state.updatePriceAndQuantity);
  const fetchData = async () => {
    const response = await getData(`products?page=${page}&limit=4`);
    return response;
  };

  const query = useQuery({
    queryKey: ["productPriceQuantity", page],
    queryFn: fetchData,
  });

  const handleSaveButtonClick = () => {
    const saveEditsMutation = tableRef.current.saveEditsMutation;
    saveEditsMutation.mutate();
  };
  const handleRefetch = async () => {
    await query.refetch();
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.priceStockMangmant}</span>
        <div className="w-32 text-xs">
          <button
            onClick={() => handleSaveButtonClick()}
            className={
              state.items.length < 1 ? "disableButton" : "primaryButton"
            }
            disabled={state.items.length < 1 ? true : false}
          >
            {faTexts.save}
          </button>
        </div>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        {query.isLoading ? (
          <Loading className="animate-spin aanimate-infinite animate-duration-1000 w-12 h-12" />
        ) : (
          <>
            <TableOrdersAdmin
              data={query.data}
              ref={tableRef}
              onRefetch={handleRefetch}
              page={page}
            />
            <Pagination setPage={setPage} data={query.data} page={page} />
          </>
        )}
      </div>
    </div>
  );
}

export default PriceAndStocks;
