import React from "react";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../../utils/Constants";
import { MdOutlineStar as Star } from "react-icons/md";
import { IconContext } from "react-icons/lib";
function Card() {
  const data = {
    rating: {
      rate: 4.2,
      count: 130,
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
    <Link to={"product/" + data._id}>
      <div className="w-full max-w-sm bg-white  rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
        <div className="overflow-hidden">
          <img
            className="rounded-t-lg aspect-auto inset-0 object-center transition duration-700 hover:scale-110"
            src={`${BASE_IMAGE_URL}${data.images[0]}`}
            loading="lazy"
            alt="product"
          />
        </div>

        <div className="p-5 flex justify-center flex-col gap-2 ">
          <h5 className="text-sm h-fit font-IranRegular  tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {data.name}
          </h5>

          <div className="flex items-center  ">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <IconContext.Provider value={{ color: "#f59e0b" }}>
                <Star />
              </IconContext.Provider>
            </div>
            <span className=" text-xs font-semibold px-2.5   ">
              {data.rating.rate}
            </span>
          </div>

          <span className="text-base font-bold text-end ">
            {data.price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
