import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
// import { MovieDetails } from "../shared/MovieDetails";

async function getDataFromApi(pageLink) {
  try {
    const data = await fetch(
      pageLink
    );
    const json_data = await data.json();
    localStorage.setItem("results",JSON.stringify(json_data));
    return json_data["results"];
  } catch (error) {
    console.log(error);
  }
}

const MovieContainer = (props) => {
  const [state, setState] = useState({ count: 0, mlist: []});
  const [likedSet,setLikedSet] = useState(new Set())
  useEffect(()=>{
    const likedArray = JSON.parse(localStorage.getItem("liked"))
    for(let i=0;i<likedArray.length;i++){
      likedSet.add(likedArray[i])
    }
    console.log(likedArray);
    console.log("movie container mount")
  },[props.currentPage])
  // poster path
  //https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg
  let mlist = [];
  useEffect(() => {
    let pageLink = `https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&page=${props.currentPage}`
    const api_data = getDataFromApi(pageLink);
    api_data
      .then((data) => {
        return data;
      })
      .then((data) => {
        mlist = data.map((px) => {
          return (
            <MovieCard
              key={px.id}
              data={px}
              movie_id={px.id}
              title={px.original_title}
              liked={likedSet.has(px.id)}
              img_link={"https://image.tmdb.org/t/p/w500" + px.poster_path}
              overview={px.overview.slice(0,50)+"..."}
              setPopData = {props.setPopData}
            />
          );
        });
        return mlist;
      })
      .then((mlist) => {
        setState((prevState) => {
          return {
            ...prevState,
            mlist:mlist
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.currentPage]);

  return (
    <div className="container my-4">
      <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
        {state.mlist}
      </div>
    </div>
  );
};

export default MovieContainer;
