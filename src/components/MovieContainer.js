import React, { Component } from "react";
import MovieCard from "./MovieCard/MovieCard";
import {MovieDetails} from "../shared/MovieDetails";
class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const mlist = MovieDetails.map((px)=>{
        return (
            <MovieCard key={px.id} link={px.link}/>
        );
    })
    return (
      <div className="container my-4">
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            {mlist}
        </div>
      </div>
    );
  }
}

export default MovieContainer;
