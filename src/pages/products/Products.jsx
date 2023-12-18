import React, { useEffect, useState } from "react";
import { getData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";
import LodingModal from "../../components/ui/modal/LoadingModal";
import { NavLink, useParams } from "react-router-dom";
import { PATHS } from "../../configs/RoutesConfig";
import Card from "../../components/ui/card/Card";
import Pagination from "../../components/ui/pagination/Pagination";
function Products() {
  let params = useParams();
  const [page, setPage] = useState(1);
  const [sortType, setSort] = useState("createdAt");
  useEffect(() => {
    setPage(1);
  }, [params]);
  const handleSelectChange = (event) => {
    setSort(event.target.value);
  };
  const fetchCategories = () => {
    const response = getData("categories");
    return response;
  };
  const queryCategory = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const fetchSubCategories = () => {
    const response = getData("subcategories");
    return response;
  };
  const querySubCategory = useQuery({
    queryKey: ["subcategories"],
    queryFn: fetchSubCategories,
  });
  const fetchProducts = () => {
    const response = getData(
      `products?limit=5&page=${page}&subcategory=${params.category}&sort=${sortType}`
    );
    return response;
  };
  const queryProducts = useQuery({
    queryKey: ["products", params, page, sortType],
    queryFn: fetchProducts,
  });
  if (
    queryCategory.isLoading ||
    querySubCategory.isLoading ||
    queryProducts.isLoading
  ) {
    return <LodingModal />;
  }
  if (queryCategory.data && querySubCategory.data) {
    console.log("ok");
  }

  return (
    <div className="flex gap-4 p-10 animate-fade font-IranRegular">
      <aside className="w-2/6 h-fit p-5 rounded-2xl shadow-lg">
        {queryCategory.data.data.categories.map((category, index) => (
          <ul key={category._id} className="flex flex-col gap-2">
            <li className="cursor-pointer">{category.name}</li>
            {querySubCategory.data.data.subcategories
              .filter((subcat) => subcat.category === category._id)
              .map((subitem) => (
                <li key={subitem._id} className="pr-4">
                  <NavLink
                    to={`${PATHS.PRODUCTS}/${subitem._id}`}
                    className={({ isActive }) => (isActive ? "activeMenu" : "")}
                  >
                    {subitem.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        ))}
      </aside>
      <div className="w-full h-fit flex flex-col gap-4 items-center">
        <div className="w-52 mb-5">
          <select
            id="countries"
            class="editInput"
            value={sortType}
            onChange={handleSelectChange}
          >
            <option value="price" selected>
              قیمت از کم به زیاد
            </option>
            <option value="-price">قیمت از زیاد به کم</option>
            <option value="createdAt">جدیدترین</option>
          </select>
        </div>

        {queryProducts.data ? (
          <div className="w-full h-fit flex flex-col gap-4 items-center">
            <article className="w-full h-fit grid grid-cols-3 gap-4">
              {queryProducts.data.data.products.map((item, index) => {
                return (
                  <Card response={item} key={index} isWithUrlPrefix={false} />
                );
              })}
            </article>
            <Pagination
              setPage={setPage}
              data={queryProducts.data}
              page={page}
            />
          </div>
        ) : (
          <span>loading</span>
        )}
      </div>
    </div>
  );
}

export default Products;
