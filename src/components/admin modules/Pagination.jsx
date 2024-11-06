import React from "react";


export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return (
      <div className="bg-primary-2 border border-primary-3 px-3 py-1 rounded">
        <p className="text-body-2 text-primary-7"> Page 1 of 1</p>
      </div>
    );
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage > 1) {
      pageNumbers.push(
        <button
          key="prev"
          className=" hover:bg-primary-2 p-2 px-4 bg-primary text-white"
          onClick={() => onPageChange(currentPage - 1)}
        >
          {/* <Image src={arrowLeft} alt="Arrow Left" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6"/></svg>
        </button>
      );
    }

    pageNumbers.push(
      <button
        key="page-1"
        className={`p-2 px-4 border ${
          currentPage === 1
            ? "bg-primary-2 text-primary-7"
            : "hover:bg-primary-2"
        }`}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pageNumbers.push(
        <span key="ellipsis1" className="p-2 px-4 border">
          &hellip;
        </span>
      );
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={` p-2 px-4 border   ${
            currentPage === i
              ? " text-lg font-semibold bg-zinc-500 text-white"
              : "hover:bg-primary-2"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <span key="ellipsis2" className="p-2 px-4 ">
          &hellip;
        </span>
      );
    }

    pageNumbers.push(
      <button
        key={totalPages}
        className={`p-2 px-4 border ${
          currentPage === totalPages
            ? "bg-primary-2 text-primary-7"
            : "hover:bg-primary-2"
        }`}
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </button>
    );

    // Next Button
    if (currentPage < totalPages) {
      pageNumbers.push(
        <button
          key="next"
          className=" hover:bg-primary-2 p-2 px-4 bg-primary text-white"
          onClick={() => onPageChange(currentPage + 1)}
        >
          {/* <Image src={arrowRight} alt="Arrow Right" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m9 18 6-6-6-6"/></svg>
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination flex justify-center items-center bg-white">
      {renderPageNumbers()}
    </div>
  );
}