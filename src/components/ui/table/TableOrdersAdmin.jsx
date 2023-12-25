import React, { useState } from "react";
import { FaSort as SortIcon } from "react-icons/fa6";
import faTexts from "../../../utils/Constants";
import { formatDate } from "../../../utils/functions";
import OrderModal from "../modal/OrderModal";
function TableOrdersAdmin({ data, refetch }) {
  const { orders } = data.data;
  const [modal, setModal] = useState(false);
  const [itemData, setdata] = useState("");
  console.log(orders);
  const handleModal = (id, item) => {
    setModal(true);
    setdata(item);
  };
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-4">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="w-28 px-6 py-3">{faTexts.userFullName}</th>
          <th scope="col" className="px-6 py-3">
            {faTexts.totalPrice}
          </th>
          <th
            scope="col"
            className="px-6 py-3 flex gap-1 cursor-pointer"
            onClick={() => {
              console.log("clicked");
              // setSort(!sort);
            }}
          >
            <SortIcon />
            {faTexts.orderDate}
          </th>

          <th scope="col" className="px-6 py-3">
            {faTexts.operation}
          </th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((item, index) => {
            return (
              <tr
                className="w-full border-b  hover:bg-gray-200 h-fit"
                key={item.createdAt}
              >
                <td className="w-20">
                  <span>{`${item.user.firstname} ${item.user.lastname}`}</span>
                </td>
                <td className="w-fit px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white ">
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {item.totalPrice}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                <td className="px-6 py-4 gap-4 items-center">
                  <span
                    className="w-fit ml-4 text-red-500 cursor-pointer underline-offset-4 underline"
                    onClick={() => handleModal(item.user._id, item)}
                  >
                    {faTexts.orderReview}
                  </span>
                </td>
              </tr>
            );
          })}
      </tbody>
      <OrderModal
        isOpen={modal}
        setModalOpen={setModal}
        data={itemData}
        refetch={refetch}
      />
    </table>
  );
}

export default TableOrdersAdmin;
