import React, { useState } from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalItemCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 5,
} = {}) => {
  const pageCount = Math.ceil(totalItemCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <a
              className={`${classes.page} ${
                currentPage === page && classes.selectedPage
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
