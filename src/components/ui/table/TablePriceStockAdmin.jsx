import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelPriceEdit,
  cancelQuantityEdit,
  editPriceAndQuantity,
} from "../../../Redux/priceAndQuantity/priceSlice";

function TablePriceStockAdmin(data) {
  const state = useSelector((state) => state.updatePriceAndQuantity);
  const editorDispatch = useDispatch();

  const [priceInputValue, setPriceInputValue] = useState("");
  const [quantityInputValue, setQuantityInputValue] = useState("");

  useEffect(() => {
    const editingItem = state.items.find(
      (item) => item.isEditingPrice || item.isEditingQuantity
    );
    if (editingItem) {
      setPriceInputValue(editingItem.isEditingPrice ? editingItem.price : "");
      setQuantityInputValue(
        editingItem.isEditingQuantity ? editingItem.quantity : ""
      );
    }
  }, [state.items]);

  function handleEscPrice(event, id) {
    if (event.key === "Escape") {
      // handle cancel
      const quantity =
        state.items.find((editingItem) => editingItem.id === id)
          ?.isEditingQuantity || false;
      editorDispatch(
        cancelPriceEdit({
          id,
          isEditingPrice: false,
          isEditingQuantity: quantity,
        })
      );
    }
  }

  function handleEscQuantity(event, id) {
    if (event.key === "Escape") {
      // handle cancel
      editorDispatch(cancelQuantityEdit({ id, isEditingQuantity: false }));
    }
  }

  // function handleInputChange(event) {
  //   console.log(event.target.value);
  //   // handle input change
  // }

  const addToItemsForEdit = (
    itemId,
    itemPrice,
    itemQuantity,
    isUpdatingPrice,
    isUpdatingQuantity
  ) => {
    const newItem = {
      id: itemId,
      price: itemPrice,
      quantity: itemQuantity,
      isEditingPrice: isUpdatingPrice,
      isEditingQuantity: isUpdatingQuantity,
    };

    editorDispatch(editPriceAndQuantity(newItem));
  };

  const { products } = data.data;

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
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
                  {state.items.find(
                    (editingItem) =>
                      editingItem.id === item._id && editingItem.isEditingPrice
                  ) ? (
                    <input
                      placeholder="price"
                      className="editPriceQuantityStyle"
                      onKeyDown={(e) => handleEscPrice(e, item._id)}
                      autoFocus
                      value={priceInputValue}
                      onChange={(e) => setPriceInputValue(e.target.value)}
                    />
                  ) : (
                    <span
                      className="w-fit cursor-pointer underline text-red-500"
                      onClick={() =>
                        addToItemsForEdit(
                          item._id,
                          item.price,
                          item.quantity,
                          true,
                          state.items.find(
                            (editingItem) => editingItem.id === item._id
                          )?.isEditingQuantity || false
                        )
                      }
                    >
                      {item.price}
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 gap-4 items-center" colSpan={1}>
                  {state.items.find(
                    (editingItem) =>
                      editingItem.id === item._id &&
                      editingItem.isEditingQuantity
                  ) ? (
                    <input
                      placeholder="quantity"
                      className="editPriceQuantityStyle"
                      onKeyDown={(e) => handleEscQuantity(e, item._id)}
                      autoFocus
                      value={quantityInputValue}
                      onChange={(e) => setQuantityInputValue(e.target.value)}
                    />
                  ) : (
                    <span
                      className="w-fit cursor-pointer underline text-red-500 "
                      onClick={() =>
                        addToItemsForEdit(
                          item._id,
                          item.price,
                          item.quantity,
                          state.items.find(
                            (editingItem) => editingItem.id === item._id
                          )?.isEditingPrice || false,
                          true
                        )
                      }
                    >
                      {item.quantity}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TablePriceStockAdmin;
