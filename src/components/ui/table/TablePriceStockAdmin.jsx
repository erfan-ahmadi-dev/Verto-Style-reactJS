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

  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    const newInputValues = {};
    state.items.forEach((editingItem) => {
      if (editingItem.isEditingPrice) {
        newInputValues[editingItem.id] = {
          ...newInputValues[editingItem.id],
          price: editingItem.price,
        };
      }
      if (editingItem.isEditingQuantity) {
        newInputValues[editingItem.id] = {
          ...newInputValues[editingItem.id],
          quantity: editingItem.quantity,
        };
      }
    });
    setInputValues(newInputValues);
  }, [state.items]);

  function handleEscPrice(event, id) {
    if (event.key === "Escape") {
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
      editorDispatch(cancelQuantityEdit({ id, isEditingQuantity: false }));
    }
  }

  function handleInputChange(event, id, type) {
    const newValue = event.target.value;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: {
        ...(prevInputValues[id] || {}),
        [type]: newValue,
      },
    }));
  }

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
      <tbody>
        {products &&
          products.map((item) => {
            const priceInputValue = inputValues[item._id]?.price || "";
            const quantityInputValue = inputValues[item._id]?.quantity || "";

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
                      onChange={(e) => handleInputChange(e, item._id, "price")}
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
                      onChange={(e) =>
                        handleInputChange(e, item._id, "quantity")
                      }
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
