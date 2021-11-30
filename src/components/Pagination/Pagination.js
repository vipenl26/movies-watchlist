import React from "react";
import { useState } from "react";
import "./Pagination.css";

const numberOfPages = 35;
const Pagination = (props) => {
  const page_list = [
    <li className="page-item" key="prev">
      <button
        className="page-link"
        onClick={() => props.setCurrentPage((c) => Math.max(1, c - 1))}
      >
        Previous
      </button>
    </li>,
  ];
  for (let i = 1; i <= numberOfPages; i++) {
    let currentClassStyle="";
    if(i===props.currentPage){
        currentClassStyle=" page-item-current"
    }
    page_list.push(
      <li className="page-item" key={i}>
        <button
          className={"page-link"+currentClassStyle}
          onClick={() => {
            props.setCurrentPage(i);
          }}
        >
          {i}
        </button>
      </li>
    );
  }
  page_list.push(
    <li className="page-item" key="next">
      <button
        className="page-link"
        onClick={() => props.setCurrentPage((c) => Math.min(1000, c + 1))}
      >
        Next
      </button>
    </li>
  );
  return (
    <ul className="pagination pagination-sm justify-content-center page-button-bar">
      {page_list}
    </ul>
  );
};

export default Pagination;
