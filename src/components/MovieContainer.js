import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";

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
    for(let i=0;likedArray!==null && i<likedArray.length;i++){
      likedSet.add(likedArray[i].id)
    }
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
              liked={likedSet.has(px.id)}
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
      window.scrollTo(0,0);
  }, [props.currentPage]);

  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-2 g-lg-3">
        {state.mlist}
      </div>
    </div>
  );
};

export default MovieContainer;
