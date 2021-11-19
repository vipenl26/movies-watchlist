import React from "react";
import { useState } from "react";
import "./Pagination.css";

const numberOfPages = 25;
const Pagination = (props) => {
  const page_list = [
    <li class="page-item">
      <button
        class="page-link"
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
      <li class="page-item">
        <button
          class={"page-link"+currentClassStyle}
          onClick={() => {
            props.setCurrentPage(i);
            console.log(i);
          }}
        >
          {i}
        </button>
      </li>
    );
  }
  page_list.push(
    <li class="page-item">
      <button
        class="page-link"
        onClick={() => props.setCurrentPage((c) => Math.min(1000, c + 1))}
      >
        Next
      </button>
    </li>
  );
  return (
    <ul class="pagination justify-content-center page-button-bar">
      {page_list}
    </ul>
  );
};

export default Pagination;
