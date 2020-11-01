import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalUserCount,
  pageSize,
  currentPage,
  onPageChange,
} = {}) => {
  const pageCount = Math.ceil(totalUserCount / pageSize);

  const pages = [];

  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => {
        return (
          <button
            className={currentPage === page && classes.selectedPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginator;
