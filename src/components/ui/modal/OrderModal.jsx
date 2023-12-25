import { Modal } from "flowbite-react";
import { patchOrder } from "../../../api/defaultApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import TableOrderModal from "../table/TableOrderModal";
import { formatDate } from "../../../utils/functions";

function OrderModal({ data, isOpen, setModalOpen, refetch }) {
  const orderData = data || {};

  const orderMutation = useMutation({
    mutationKey: ["deliverProduct"],
    mutationFn: () => {
      return patchOrder(`orders/${orderData._id}/`, {
        deliveryStatus: true,
      });
    },
    onSuccess: (data) => {
      if (data) {
        toast.success("سفارش مورد نظر تحویل داده شد");
        refetch();
        setModalOpen(false);
      } else {
        toast.error("خطایی رخ داده است");
      }
    },
    onError: () => {
      toast.error("خطایی رخ داده است");
    },
  });

  const handleDeliverButton = () => {
    orderMutation.mutate();
  };
  return (
    <>
      <Modal
        show={isOpen}
        size="md"
        onClose={() => setModalOpen(false)}
        popup
        className=""
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center font-IranRegular flex flex-col  gap-2 space-y-6 ">
            <div className="flex items-start flex-col justify-center gap-3">
              <span>
                نام مشتری:{" "}
                {`${orderData.user?.firstname} ${orderData.user?.lastname}`}
              </span>
              <span>شماره تماس: {orderData.user?.phoneNumber}</span>
              <span className="max-h-16">آدرس: {orderData.user?.address}</span>
              <span>تاریخ تحویل: {formatDate(orderData.deliveryDate)}</span>
              <span>زمان ایجاد: {formatDate(orderData.createdAt)}</span>
            </div>
            <div className="flex justify-center gap-4">
              <TableOrderModal data={orderData.products || []} />
            </div>
            {!orderData.deliveryStatus && (
              <div className="w-1/5 flex justify-center self-center">
                <button
                  className="primaryButton"
                  onClick={() => handleDeliverButton()}
                >
                  تحویل شد
                </button>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderModal;
