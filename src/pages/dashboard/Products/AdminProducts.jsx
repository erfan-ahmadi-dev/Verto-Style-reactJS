import React, { useState } from "react";
import faTexts from "../../../utils/Constants";
import TableProducts from "../../../components/ui/table/TableProductAdmin";
import { getProductsWithCatAndSubCat } from "../../../api/productApi";
import Pagination from "../../../components/ui/pagination/Pagination";
import Button from "../../../components/ui/button/Button";
import { useQuery } from "@tanstack/react-query";
import { LuLoader as Loading } from "react-icons/lu";
import ModalAddProduct from "../../../components/ui/modal/ModalAddProduct";
function AdminProducts() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [productId, setId] = useState();

  const fetchData = async () => {
    const response = await getProductsWithCatAndSubCat(page, 4, "createdAt");
    return response;
  };

  const query = useQuery({
    queryKey: ["products", page],
    queryFn: fetchData,
    staleTime: 500,
  });

  const openModal = () => {
    setModalOpen(true);
    setId(undefined);
  };

  const handleRefetch = () => {
    query.refetch();
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.productsManagment}</span>
        <div className="w-32 text-xs">
          <Button label={faTexts.addProduct} onClick={openModal} />
        </div>
      </div>
      <div className="relative h-full overflow-x-auto sm:rounded-lg w-full px-5 ">
        {query.isLoading ? (
          <Loading className="animate-spin aanimate-infinite animate-duration-1000 w-12 h-12" />
        ) : (
          <>
            <TableProducts
              data={query.data}
              setOpenModal={setModalOpen}
              setId={setId}
              onRefetch={handleRefetch}
            />
            <Pagination setPage={setPage} data={query.data} page={page} />
          </>
        )}
      </div>
      <ModalAddProduct
        openModal={isModalOpen}
        setOpenModal={setModalOpen}
        productId={productId}
      />
    </div>
  );
}

export default AdminProducts;
