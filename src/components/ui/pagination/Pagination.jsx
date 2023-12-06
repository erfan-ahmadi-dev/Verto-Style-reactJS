import React from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
function Pagination({ data, setPage, page }) {
  const handleNext = () => {
    if (page !== data.total_pages) {
      setPage(page + 1);
    }
  };
  const handlePrevious = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  return (
    <nav aria-label="Page navigation example" className="py-5">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <span
            onClick={handlePrevious}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MdNavigateNext />
          </span>
        </li>
        {[...Array(data.total_pages)].map((item, index) => (
          <li key={index}>
            <span
              onClick={() => setPage(index + 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {index + 1}
            </span>
          </li>
        ))}

        <li>
          <span
            onClick={handleNext}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <MdNavigateBefore />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
