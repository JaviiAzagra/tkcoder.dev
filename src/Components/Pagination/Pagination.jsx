import React from "react";
import "./Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  /* const handlePageClick = (pageNumber) => {
    paginate(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }; */

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} onClick={() => paginate(number)}>
          {number}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
