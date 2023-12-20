import React, { useEffect, useState } from "react";
import faTexts from "../../../utils/Constants";
import TableOrdersAdmin from "../../../components/ui/table/TablePriceStockAdmin";
import { getData } from "../../../api/defaultApi";
import Pagination from "../../../components/ui/pagination/Pagination";
import Button from "../../../components/ui/button/Button";
import { useSelector } from "react-redux";
function PriceAndStocks() {
  const [priceStockData, setData] = useState({ data: [] });
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state.updatePriceAndQuantity);
  useEffect(() => {
    getData(`products?page=${page}&limit=4`).then((Response) => {
      setData(Response || { data: [] });
    });
  }, [page]);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.priceStockMangmant}</span>
        <div className="w-32 text-xs">
          <Button label={faTexts.save} />
        </div>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        <TableOrdersAdmin data={priceStockData.data} />
        <Pagination setPage={setPage} data={priceStockData} page={page} />
      </div>
    </div>
  );
}

export default PriceAndStocks;
