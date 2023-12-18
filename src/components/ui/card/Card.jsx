import React from "react";
import { Link } from "react-router-dom";
import { BASE_THUMBNAIL_URL } from "../../../utils/Constants";
import { MdOutlineStar as Star } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Card({ isLoading, response }) {
  console.log(response);
  return (
    <Link to={"product/" + response?._id}>
      <div className="w-full max-w-sm bg-white  rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 ">
        <div className="overflow-hidden ">
          {isLoading ? (
            <Skeleton className="w-52 h-80" />
          ) : (
            <img
              className="rounded-t-lg aspect-auto h-80 inset-0 object-center transition duration-700 hover:scale-110"
              src={`${BASE_THUMBNAIL_URL}${response.thumbnail}`}
              loading="lazy"
              alt="product"
            />
          )}
        </div>

        <div className="p-5 flex justify-center flex-col gap-2 ">
          {isLoading ? (
            <Skeleton />
          ) : (
            <h5 className="text-sm h-fit font-IranRegular  tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {response.name}
            </h5>
          )}

          <div className="flex items-center  ">
            {isLoading ? (
              <Skeleton className="px-5" />
            ) : (
              <>
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <IconContext.Provider value={{ color: "#f59e0b" }}>
                    <Star />
                  </IconContext.Provider>
                </div>
                <span className=" text-xs font-semibold px-2.5   ">
                  {response.rating.rate}
                </span>
              </>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-end w-full">
              <Skeleton className="px-10 py-1" />
            </div>
          ) : (
            <span className="text-base font-bold text-end ">
              {response.price.toLocaleString("fa-IR")} تومان
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
