import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import faTexts from "../../../utils/Constants";
import { deleteData } from "../../../api/defaultApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function ConfirmModal({ isOpen, setOpenConfirm, itemId, onRefetch }) {
  const deleteMutation = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: (id) => {
      return deleteData(`products/`, id);
    },
    onSuccess: (data) => {
      if (data) {
        toast.success("محصول مورد نظر حذف شد");
        onRefetch(false, true);
      } else {
        toast.error("خطایی رخ داده است");
      }
    },
    onError: () => {
      toast.error("خطایی رخ داده است");
    },
  });

  const deleteHandler = async () => {
    setOpenConfirm(false);
    deleteMutation.mutate(itemId);
  };
  return (
    <>
      <Modal
        show={isOpen}
        size="md"
        onClose={() => setOpenConfirm(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center font-IranRegular ">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {faTexts.sureToDelete}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteHandler}>
                {faTexts.yes}
              </Button>
              <Button color="gray" onClick={() => setOpenConfirm(false)}>
                {faTexts.no}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmModal;
