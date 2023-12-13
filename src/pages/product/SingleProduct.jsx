import { BsShieldCheck as WarrantyIcon } from "react-icons/bs";
import { LiaShippingFastSolid as ShippingIcon } from "react-icons/lia";
function SingleProduct() {
  const data = {
    rating: {
      rate: 0,
      count: 0,
    },
    _id: "6569d16f7d8862dfba146f4b",
    category: "6561eaa51adeb81260019942",
    subcategory: "6561eb0c1adeb81260019951",
    name: "تی شرت آستین بلند مردانه باینت مدل 2261571-571 رنگ مشکی",
    price: 418000,
    quantity: 8,
    brand: "باینت",
    description:
      "جنس: نخ، تریکو،الیاف طبیعی\nقد:روی باسن\nنوع لباس: معمولی\nیقه: گرد\nآستین:بلند:\nمورد استفاده: روزمره\nطرح: ساده\nتوضیحات جنس: الیاف طبیعی پنبه\nکشور مبدا برند: ایران\nکشور تولید کننده: ایران",
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
              <img
                className="w-full h-full object-cover"
                loading="lazy"
                src={`http://localhost:8000/images/products/images/${data.images[0]}`}
                alt="Product"
              />
            </div>
          </div>
          <div className="md:flex-1 p-4 gap-4 flex-col flex justify-between">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl  text-gray-800 dark:text-white mb-2">
                {data.name}
              </h2>
              <h3 className=" text-base text-gray-500 dark:text-white">
                {data.brand}
              </h3>
            </div>

            <div className="flex flex-col h-fit gap-4">
              <div className="flex gap-2">
                <ShippingIcon className="h-full w-5 " />
                <span className="text-sm">آماده ارسال</span>
              </div>
              <div className="flex gap-2">
                <WarrantyIcon className="h-full w-5" />
                <span className="text-sm">گارانتی اصالت و سلامت فیزیکی</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                سایز:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div>

            <div className="flex   py-4   items-center justify-between">
              <div className="w-2/5 px-2">
                <button className="primaryButton">افزودن به سبد</button>
              </div>
              <div className="mr-4 ">
                <span className="font-bold text-gray-700 dark:text-gray-30">
                  قیمت:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {data.price} تومان
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-4">
          <div className="flex flex-col gap-4 w-3/12">
            <h3 className="font-bold">ویژگی های </h3>
            <h4 className="text-xs">{data.name}</h4>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">مشخصات </h3>
            <div className=" text-gray-700 dark:text-gray-300 whitespace-pre leading-8 text-sm">
              {data.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
