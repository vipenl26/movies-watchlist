import React from "react";
import "./PopMovieCard.css";

const backdrop_link =  (link)=>`
.pop-movie-card-holder .hero:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background: red;
    background: url("${link}");
    background-size: 800px;
    z-index: -1;
    -webkit-transform: skewY(-2.2deg);
    transform: skewY(-2.2deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    backface-visibility: hidden;
  }
`
const genre = new Map([
    [ 28, 'Action' ],
[ 12, 'Adventure' ],
[ 16, 'Animation' ],
[ 35, 'Comedy' ],
[ 80, 'Crime' ],
[ 99, 'Documentary' ],
[ 18, 'Drama' ],
[ 10751, 'Family' ],
[ 14, 'Fantasy' ],
[ 36, 'History' ],
[ 27, 'Horror' ],
[ 10402, 'Music' ],
[ 9648, 'Mystery' ],
[ 10749, 'Romance' ],
[ 878, 'Sci-Fi' ],
[ 10770, 'TV Movie' ],
[ 53, 'Thriller' ],
[ 10752, 'War' ],
[ 37, 'Western' ],
]);



const PopMovieCard = (props) => {
    const genres = props.data.genre_ids.map((p)=>{
        return <span className="tag genre" key={genre.get(p)}>{genre.get(p)}</span>
    });
  return (
    <div className="pop-movie-card-holder" id="overlay">
        
      <div className="movie-card">
     
        <div className="pop-container">
        
            <img
              src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path}
              alt="cover"
              className="cover"
          />
        
          <div className="hero">
          <style>
            {backdrop_link("https://image.tmdb.org/t/p/w500"+props.data.backdrop_path)}
        </style>
          <button type="button" className="btn-close btn-close-white pop-close-button" aria-label="Close" onClick={()=>props.setPopData(false)}/>
            <div className="details">
              <div className="title1">{props.data.original_title.slice(0,25)}</div>

              <div className="title2">{props.data.original_title.slice(25)}</div>
                <span className="tag avg-rating">Rating {props.data.vote_average}</span>
              {/* <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label
                  className="full"
                  for="star5"
                  title="Awesome - 5 stars"
                ></label>
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  value="4 and a half"
                /><label
                  className="half"
                  for="star4half"
                  title="Pretty good - 4.5 stars"
                ></label>
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  checked
                /><label
                  className="full"
                  for="star4"
                  title="Pretty good - 4 stars"
                ></label>
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  value="3 and a half"
                /><label
                  className="half"
                  for="star3half"
                  title="Meh - 3.5 stars"
                ></label>
                <input type="radio" id="star3" name="rating" value="3" /><label
                  className="full"
                  for="star3"
                  title="Meh - 3 stars"
                ></label>
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  value="2 and a half"
                /><label
                  className="half"
                  for="star2half"
                  title="Kinda bad - 2.5 stars"
                ></label>
                <input type="radio" id="star2" name="rating" value="2" /><label
                  className="full"
                  for="star2"
                  title="Kinda bad - 2 stars"
                ></label>
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  value="1 and a half"
                /><label
                  className="half"
                  for="star1half"
                  title="Meh - 1.5 stars"
                ></label>
                <input type="radio" id="star1" name="rating" value="1" /><label
                  className="full"
                  for="star1"
                  title="Sucks big time - 1 star"
                ></label>
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  value="half"
                /><label
                  className="half"
                  for="starhalf"
                  title="Sucks big time - 0.5 stars"
                ></label>
              </fieldset> */}

              {/* <span className="likes">109 likes</span> */}
            </div>
            {/* <!-- end details --> */}
          </div>
          {/* <!-- end hero --> */}

          <div className="description">
            <div className="column1">
              {/* <span className="tag">action</span> */}
              {genres}
            </div>
            {/* <!-- end column1 --> */}

            <div className="column2">
              <p>
                {props.data.overview}
                {/* <a href="#">read more</a> */}
              </p>
              {/* <!-- end avatars --> */}
            </div>
            {/* <!-- end column2 --> */}
          </div>
          {/* <!-- end description --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end movie-card --> */}
    </div>
  );
};

export default PopMovieCard;
