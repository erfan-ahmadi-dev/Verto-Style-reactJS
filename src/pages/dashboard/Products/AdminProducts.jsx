import React, { useEffect, useState } from "react";
import faTexts from "../../../utils/Constants";
import TableProducts from "../../../components/ui/table/TableProductAdmin";
import { getProductsWithCatAndSubCat } from "../../../api/productApi";
import Pagination from "../../../components/ui/pagination/Pagination";
function AdminProducts() {
  const [productData, setData] = useState({ data: [] });
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProductsWithCatAndSubCat(page, 4, "createdAt").then((Response) => {
      setData(Response || { data: [] });
    });
  }, [page]);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.productsManagment}</span>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        <TableProducts data={productData.data} />
        <Pagination setPage={setPage} data={productData} page={page} />
      </div>
    </div>
  );
}

export default AdminProducts;
