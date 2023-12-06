import React, { useEffect, useState } from "react";
import faTexts from "../../../utils/Constants";
import TableProducts from "../../../components/ui/table/TableProductAdmin";
import { getProductsWithCatAndSubCat } from "../../../api/productApi";
function AdminProducts() {
  const [productData, setData] = useState({ data: [] });
  useEffect(() => {
    getProductsWithCatAndSubCat(1, 4, "createdAt").then((Response) => {
      setData(Response || { data: [] });
    });
  }, []);
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.productsManagment}</span>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        <TableProducts data={productData.data} />
      </div>
    </div>
  );
}

export default AdminProducts;
