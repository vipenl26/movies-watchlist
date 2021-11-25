import React from "react";
import { useState } from "react";
import "./MovieCard";

const likeButton = (func)=>{
  return (
    <button type="button" className="btn btn-outline-danger" onClick={func}>
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
  );
}
const likeButtonActivate = (func)=>{
  return (
    <button type="button" className="btn btn-outline-danger" onClick={func}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                ></path>
              </svg>
            </button>
  );
}
const likeButtonSwitch = (liked,setLiked,movieData)=>{
  if(liked){
    return likeButtonActivate(()=>{
      setLiked(false)
      fetch("http://localhost:3001/watch-list", {
        method: 'DELETE',
        body: `{"id":${movieData.id}}`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .catch((err) => {
        console.log("backendserver is down")
      });
      let ls = JSON.parse(localStorage.getItem("liked"))
      ls = ls.filter((item)=>item.id!==movieData.id)
      localStorage.setItem("liked",JSON.stringify(ls))
    })
  }
  return likeButton(()=>{
    setLiked(true)
    fetch("http://localhost:3001/watch-list", {
        method: 'POST',
        body: JSON.stringify(movieData),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .catch((err) => {
      console.log("backendserver is down")
    });
    let ls = JSON.parse(localStorage.getItem("liked"))
    ls.push(movieData)
    localStorage.setItem("liked",JSON.stringify(ls))
  
  })
}

const MovieCard=(props)=> {
  const[liked,setLiked] = useState(props.liked)

  return (
    <div className="col">
      <div
        className="card text-white"
        style={{ width: "18rem", background: "rgb(255,163,26)" }}
      >
        <img src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.original_title}</h5>
          <p className="card-text">{props.data.overview.slice(0,50)+"..."}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-secondary me-md-2"
                type="button"
                onClick={() => props.setPopData(props.data)}
              >
                Read More
              </button>
            {likeButtonSwitch(liked,setLiked,props.data)}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
