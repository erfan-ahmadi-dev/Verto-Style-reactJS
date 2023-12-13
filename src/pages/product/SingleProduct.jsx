import { BsShieldCheck as WarrantyIcon } from "react-icons/bs";
import { LiaShippingFastSolid as ShippingIcon } from "react-icons/lia";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// TODO disable button when is loading
function SingleProduct(isLoading) {
  isLoading = true;
  const data = {
    rating: {
      rate: 0,
      count: 0,
    },
    _id: "6569d16f7d8862dfba146f4b",
    category: "6561eaa51adeb81260019942",
    subcategory: "6561eb0c1adeb81260019951",
    name: "تی شرت تست",
    price: 650000,
    quantity: 8,
    brand: "باینت",
    description: "",
    thumbnail: "products-6569d16f7d8862dfba146f4b-1701433711840.jpeg",
    images: [
      "products-6569d16f7d8862dfba146f4b-1701433711894-1.jpeg",
      "products-6569d16f7d8862dfba146f4b-1701433711894-2.jpeg",
      "products-6569d16f7d8862dfba146f4b-1701433711895-3.jpeg",
    ],
    createdAt: "2023-12-01T12:28:31.811Z",
    updatedAt: "2023-12-01T12:28:31.976Z",
    slugname: "ty-shrt-aastyn-blnd-mrdanh-baynt-mdl-2261571-571-rng-mshky",
  };

  const dataHandler = (element, sklCount = 1, sklwidth, sklheight) => {
    return isLoading ? (
      <Skeleton count={sklCount} width={sklwidth} height={sklheight} />
    ) : (
      element
    );
  };
  return (
    <div className=" dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* breadcrumb */}
        <nav className="flex mb-4 " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {data.subcategory}
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="/"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {data.subCategory}
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row -mx-4 border-b-2 py-4">
          <div className="md:flex-1 px-4">
            <div className="h-fit rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              {isLoading ? (
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
                {dataHandler(data.name)}
              </h2>
              <h3 className=" text-base text-gray-500 dark:text-white">
                {dataHandler(data.brand)}
              </h3>
            </div>

            <div className="flex flex-col h-fit gap-4">
              {dataHandler(
                <div className="flex gap-2">
                  <ShippingIcon className="h-full w-5 " />
                  <span className="text-sm">آماده ارسال</span>
                </div>,
                1,
                200
              )}
              {dataHandler(
                <div className="flex gap-2">
                  <WarrantyIcon className="h-full w-5" />
                  <span className="text-sm">گارانتی اصالت و سلامت فیزیکی</span>
                </div>,
                1,
                200
              )}
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                {dataHandler("سایز", 1, 70)}
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
                      for="hosting-big"
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
                      for="large"
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
                      for="xl"
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
                <button className="primaryButton">افزودن به سبد</button>
              </div>
              <div className="mr-4 ">
                <span className="text-gray-600 dark:text-gray-300 w-2/5">
                  {isLoading ? (
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
              {isLoading ? <Skeleton width={200} /> : data.name}
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">مشخصات </h3>
            <div className=" text-gray-700 dark:text-gray-300 whitespace-pre leading-8 text-sm">
              {data.description || <Skeleton count={8} width={200} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
