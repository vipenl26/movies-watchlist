import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
const MovieWatchListContainer = (props) => {
  const [likedList, setLikedList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/watch-list")
    .then((data) => {
      return data.json();
    }).then((data) => {
      localStorage.setItem("liked", JSON.stringify(data));
    })
    .catch((err) => {
      console.log("backend server is offline")
    })
    .finally(() => {
      const likedArray = JSON.parse(localStorage.getItem("liked"));
      setLikedList(likedArray);
      }
    )
  }, []);
  const mlist = likedList.map((px) => {
    return <MovieCard key={px.id} data={px} setPopData = {props.setPopData} liked />;
  });
  if (mlist.length == 0) {
    mlist.push([
      <h3 key="1" style={{marginBottom:"40%", color:"rgb(255,163,26)"}}>
        Click on{" "}
        <button type="button" className="btn btn-outline-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
          </svg>
        </button>
        to add to watchlist
      </h3>
    ]);
  }
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-2 g-lg-3">{mlist}</div>
    </div>
  );
};

export default MovieWatchListContainer;
