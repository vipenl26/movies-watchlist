import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard";
const setData = (movie_id,setPopData)=>{
  const raw_data =  JSON.parse(localStorage.getItem("results"))
  const data = raw_data["results"]

  for(let i=0;i<data.length;i++){
    if(data[i].id === movie_id){
      setPopData(data[i]);
      return;
    }
  }
}

function MovieCard(props) {
  return (
    <div className="col">
      <div
        className="card text-white"
        style={{ width: "18rem", background: "rgb(255,163,26)" }}
      >
        <img src={props.img_link} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.overview}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/pop-card">
              <button className="btn btn-secondary me-md-2" type="button" onClick={()=>setData(props.movie_id,props.setPopData)}>
                Read More
              </button> 
            </Link>
            <button className="btn btn-danger" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
