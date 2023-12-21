import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cancelPriceEdit,
  cancelQuantityEdit,
  editPriceAndQuantity,
  saveEdits,
  updateData,
} from "../../../Redux/priceAndQuantity/priceSlice";
import faTexts from "../../../utils/Constants";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
function TablePriceStockAdmin({ data, isSendingData }) {
  const state = useSelector((state) => state.updatePriceAndQuantity);
  const editorDispatch = useDispatch();
  const [inputValues, setInputValues] = useState({});
  const [currentValue, setCurrent] = useState();
  const [editedItems, setEditedItems] = useState([]);

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

  // const updateProduct = async (changes) => {
  //   const responses = await Promise.all(
  //     changes.map(async (change) => {
  //       const response = await axios.patch(`/api/products/${change.id}`, {
  //         price: change.price,
  //         quantity: change.quantity,
  //       });
  //       return response.data;
  //     })
  //   );
  //   return responses;
  // };

  // const saveEditsMutation = useMutation(updateProduct, {
  //   onSuccess: () => {
  //     // Handle success, e.g., show a success message
  //     editorDispatch(saveEdits(editedItems));
  //     setEditedItems([]); // Clear editedItems after successful save
  //   },
  //   onError: (error) => {
  //     // Handle error, e.g., show an error message
  //   },
  // });

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
    let newValue = event.target.value;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: {
        ...(prevInputValues[id] || {}),
        [type]: newValue,
      },
    }));
    if (newValue < 1) {
      toast.error("تعداد نمیتواند کمتر از یک باشد");
      newValue = 1;
    } else {
      const currentPrice = type === "price" ? newValue : inputValues[id].price;
      const currentQuantity =
        type === "quantity" ? newValue : inputValues[id].quantity;
      setCurrent({ price: currentPrice, quantity: currentQuantity });

      editorDispatch(
        updateData({
          id,
          price: currentPrice,
          quantity: currentQuantity,
        })
      );
    }
  }

  function addToItemsForEdit(
    itemId,
    itemPrice,
    itemQuantity,
    isUpdatingPrice,
    isUpdatingQuantity
  ) {
    const newItem = {
      id: itemId,
      price: itemPrice,
      previousPrice: itemPrice,
      quantity: itemQuantity,
      previousQuantity: itemQuantity,
      isEditingPrice: isUpdatingPrice,
      isEditingQuantity: isUpdatingQuantity,
    };

    editorDispatch(editPriceAndQuantity(newItem));

    // Add the edited item to editedItems array
    setEditedItems((prevEditedItems) => [...prevEditedItems, newItem]);
  }

  const { products } = data.data;

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
            const priceInputValue = inputValues[item._id]?.price || item.price;
            const quantityInputValue =
              inputValues[item._id]?.quantity || item.quantity;

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
                      type="number"
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
                      type="number"
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
