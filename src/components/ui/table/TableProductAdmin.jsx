import React, { useState } from "react";
import faTexts, { BASE_IMAGE_URL } from "../../../utils/Constants";
import { FaSort as SortIcon } from "react-icons/fa6";
function TableProductAdmin(data) {
  const { products } = data.data;
  console.log(products);

  // TODO change Persian Text Tbody
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="w-28 px-6 py-3">{faTexts.image}</th>
          <th scope="col" className="px-6 py-3">
            {faTexts.producName}
          </th>
          <th scope="col" className="px-6 py-3 flex gap-1 cursor-pointer">
            <SortIcon />
            {faTexts.productCategory}
          </th>

          <th scope="col" className="px-6 py-3">
            {faTexts.operation}
          </th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((item) => {
            return (
              <tr className="w-full border-b  hover:bg-gray-200 h-fit">
                <th className="w-20">
                  <img
                    className="w-20 h-20 "
                    src={`${BASE_IMAGE_URL}${item.images[0]}`}
                    alt="Jese"
                  />
                </th>
                <th
                  scope="row"
                  className="w-fit px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white "
                >
                  <div className="ps-3">
                    <div className="text-base font-semibold">{item.name}</div>
                  </div>
                </th>

                <td className="px-6 py-4">
                  {item.category} / {item.subcategory}
                </td>
                <td className=" px-6 py-4 ">
                  <span className="w-fit ml-4 cursor-pointer underline underline-offset-4 ">
                    {faTexts.edit}{" "}
                  </span>
                  <span className="w-fit cursor-pointer underline underline-offset-4 text-red-500">
                    {faTexts.delete}
                  </span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableProductAdmin;