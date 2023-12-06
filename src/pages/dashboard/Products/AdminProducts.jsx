import React from "react";
import faTexts from "../../../utils/Constants";
import TableProducts from "../../../components/ui/table/TableProductAdmin";
function AdminProducts() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.productsManagment}</span>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        <TableProducts />
      </div>
    </div>
  );
}

export default AdminProducts;
