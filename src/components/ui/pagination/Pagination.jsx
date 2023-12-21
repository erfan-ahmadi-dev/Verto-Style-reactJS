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

  const totalPages = data.total_pages;

  const maxPagesToShow = 10;

  // Calculate the range of pages to display
  let startPage = Math.max(
    1,
    Math.min(
      page - Math.floor(maxPagesToShow / 2),
      totalPages - maxPagesToShow + 1
    )
  );

  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Ensure non-negative length
  const pageArrayLength = Math.max(endPage - startPage + 1, 0);

  return (
    <nav aria-label="Page navigation example" className="py-5">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <span
            onClick={handlePrevious}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            <MdNavigateNext />
          </span>
        </li>
        {Array.from({ length: pageArrayLength }).map((_, index) => {
          const pageNumber = startPage + index;

          const isCurrentPage = pageNumber === page;

          return (
            <li key={index} className="cursor-pointer select-none">
              <span
                onClick={() => setPage(pageNumber)}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300  ${
                  isCurrentPage ? "bg-red-500 text-white" : ""
                }`}
              >
                {pageNumber}
              </span>
            </li>
          );
        })}
        <li>
          <span
            onClick={handleNext}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            <MdNavigateBefore />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
