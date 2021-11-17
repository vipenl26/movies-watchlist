import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { MovieDetails } from "../shared/MovieDetails";

async function getDataFromApi(){
  try{
  const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb");
  const json_data = await data.json()
  return json_data["results"]
}
  catch(error){
    console.log(error);
  }
}

class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // poster path
    //https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg
    // let api_data;
    // fetch("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")
    // .then((data)=>{
    //   return data.json();
    // })
    // .then((data)=>{
    //   api_data=data["results"];
    //   console.log(api_data);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
    let mlist=null;
    const api_data = getDataFromApi();
    api_data.then((data)=>{
      
        return mlist;
    })
    .then((data)=>{
      mlist = data.map((px)=>{
        return <MovieCard key={px.id} title = {px.original_title} img_link={"https://image.tmdb.org/t/p/w500"+px.poster_path}/>
      })
      return mlist;
    })
    .then(
      
    )
    .catch(err=>{
      console.log(err);
    })

    
    mlist = MovieDetails.map((px) => {
      return <MovieCard key={px.id} img_link={px.link} />;
    });
    return (
      <div className="container my-4">
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">{mlist}</div>
      </div>
    );
  }
}

export default MovieContainer;
