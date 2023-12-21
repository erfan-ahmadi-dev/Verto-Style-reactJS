import { useState } from "react";
import faTexts from "../../../utils/Constants";
import TableOrdersAdmin from "../../../components/ui/table/TablePriceStockAdmin";
import { getData } from "../../../api/defaultApi";
import Pagination from "../../../components/ui/pagination/Pagination";
import Button from "../../../components/ui/button/Button";

import { LuLoader as Loading } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
function PriceAndStocks() {
  // const [priceStockData, setData] = useState({ data: [] });
  const [page, setPage] = useState(1);
  const [isSendingData, setSendData] = useState(false);
  console.log(isSendingData);
  const fetchData = async () => {
    const response = await getData(`products?page=${page}&limit=4`);
    return response;
  };

  const query = useQuery({
    queryKey: ["productPriceQuantity", page],
    queryFn: fetchData,
    staleTime: 1000,
  });

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.priceStockMangmant}</span>
        <div className="w-32 text-xs">
          <Button
            label={faTexts.save}
            onClick={() => setSendData(!isSendingData)}
          />
        </div>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        {query.isLoading ? (
          <Loading className="animate-spin aanimate-infinite animate-duration-1000 w-12 h-12" />
        ) : (
          <>
            <TableOrdersAdmin
              data={query.data}
              isSendingData={isSendingData}
              setSendData={setSendData}
            />
            <Pagination setPage={setPage} data={query.data} page={page} />
          </>
        )}
      </div>
    </div>
  );
}

export default PriceAndStocks;
