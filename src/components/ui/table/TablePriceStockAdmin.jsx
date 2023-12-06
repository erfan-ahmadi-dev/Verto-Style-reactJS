import React from "react";
import faTexts from "../../../utils/Constants";

function TablePriceStockAdmin(data) {
  const { products } = data.data;
  console.log(products);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="w-3/4 px-6 py-3" colSpan={10}>
            {faTexts.producName}
          </th>
          <th scope="col" className="px-6 py-3" colSpan={1}>
            {faTexts.productPrice}
          </th>

          <th scope="col" className="px-6 py-3" colSpan={1}>
            {faTexts.stock}
          </th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((item) => {
            return (
              <tr
                className="w-full border-b  hover:bg-gray-200 h-fit"
                colSpan={10}
                key={item.createdAt}
              >
                <td
                  colSpan={10}
                  className="w-fit px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white "
                >
                  <div className="ps-3">
                    <div className="text-base font-semibold">{item.name}</div>
                  </div>
                </td>

                <td className="px-6 py-4" colSpan={1}>
                  <span className="w-fit cursor-pointer underline text-red-500">
                    {item.price}
                  </span>
                </td>
                <td className="px-6 py-4 gap-4 items-center" colSpan={1}>
                  {" "}
                  <span className="w-fit cursor-pointer underline text-red-500 ">
                    {item.quantity}
                  </span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TablePriceStockAdmin;
