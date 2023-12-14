import { BsShieldCheck as WarrantyIcon } from "react-icons/bs";
import { LiaShippingFastSolid as ShippingIcon } from "react-icons/lia";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";
import { IoIosArrowBack as ArrowIcon } from "react-icons/io";
// TODO disable button when is loading / add dynamic size
function SingleProduct() {
  const params = useParams();

  let data;
  const fetchProduct = () => {
    return getData(`products/${params.productId}`);
  };
  const query = useQuery({
    queryKey: ["productWithId"],
    queryFn: fetchProduct,
    staleTime: 1000,
  });
  if (!query.isLoading) {
    data = query.data.data.product;
  }

  return (
    <div className=" dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-4 " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link to="/" className="breadcumpText">
                {query.isLoading ? <Skeleton /> : data.category.name}
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ArrowIcon className="ml-2" />
                <Link to="/" className="breadcumpText">
                  {query.isLoading ? <Skeleton /> : data.subcategory.name}
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row -mx-4 border-b-2 py-4">
          <div className="md:flex-1 px-4">
            <div className="h-fit rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {query.isLoading ? (
                <Skeleton height={500} />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  src={`http://localhost:8000/images/products/images/${data.images[0]}`}
                  alt="Product"
                />
              )}
            </div>
          </div>
          <div className="md:flex-1 p-4 gap-4 flex-col flex justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl  text-gray-800 dark:text-white mb-2">
                {query.isLoading ? <Skeleton /> : data.name}
              </h2>
              <h3 className=" text-base text-gray-500 dark:text-white">
                {query.isLoading ? <Skeleton /> : data.brand}
              </h3>
            </div>

            <div className="flex flex-col h-fit gap-4">
              {query.isLoading ? (
                <Skeleton width={200} />
              ) : (
                <div className="flex gap-2">
                  <ShippingIcon className="h-full w-5 " />
                  <span className="text-sm">آماده ارسال</span>
                </div>
              )}
              {query.isLoading ? (
                <Skeleton width={200} />
              ) : (
                <div className="flex gap-2">
                  <WarrantyIcon className="h-full w-5" />
                  <span className="text-sm">گارانتی اصالت و سلامت فیزیکی</span>
                </div>
              )}
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                {query.isLoading ? <Skeleton width={70} /> : "سایز"}
              </span>
              <div className="flex items-center mt-2">
                <ul className="flex w-full gap-6 ">
                  <li>
                    <input
                      type="radio"
                      id="hosting-big"
                      name="size"
                      value="hosting-big"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="hosting-big"
                      className="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-red-600 peer-checked:text-red-600  hover:bg-gray-100"
                    >
                      <div>
                        <div className="w-fit text-lg font-semibold">M</div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="large"
                      name="size"
                      value="large"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="large"
                      className="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-red-600 peer-checked:text-red-600  hover:bg-gray-100"
                    >
                      <div className="w-fit text-lg font-semibold">L</div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="xl"
                      name="size"
                      value="xl"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="xl"
                      className="inline-flex items-center justify-between w-fit p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-red-600 peer-checked:text-red-600  hover:bg-gray-100"
                    >
                      <div>
                        <div className="w-fit text-lg font-semibold">XL</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex   py-4   items-center justify-between">
              <div className="w-2/5 px-2">
                <button className="outlineButton">افزودن به سبد</button>
              </div>
              <div className="mr-4 ">
                <span className="text-gray-600 dark:text-gray-300 w-2/5">
                  {query.isLoading ? (
                    <Skeleton width={100} />
                  ) : (
                    data.price.toLocaleString("fa-IR").concat(" تومان")
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-4">
          <div className="flex flex-col gap-4 w-3/12">
            <h3 className="font-bold">ویژگی های </h3>
            <h4 className="text-xs">
              {query.isLoading ? <Skeleton width={200} /> : data.name}
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">مشخصات </h3>
            <div className=" text-gray-700 dark:text-gray-300 whitespace-pre leading-8 text-sm">
              {query.isLoading ? (
                <Skeleton width={200} count={8} />
              ) : (
                data.description
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
