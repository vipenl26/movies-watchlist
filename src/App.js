import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyNav from "./components/Navbar/MyNav";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer/Footer";
import PopMovieCard from "./components/PopMovieCard/PopMovieCard";
import Pagination from "./components/Pagination/Pagination";
import MovieWatchListContainer from "./components/MovieWatchListContainer/MovieWatchListContainer";
const App = () => {
  const [popData, setPopData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify([]));
    fetch("http://localhost:3001/watch-list")
    .then((data) => {
      return data.json();
    }).then((data) => {
      const fav = data["favorites"];
      localStorage.setItem("liked", JSON.stringify(fav));
    })
    .catch((err) => {
      console.log("backend server is offline")
    });
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/movies-watchlist"
            element={
              <>
                <MovieContainer
                  setPopData={setPopData}
                  currentPage={currentPage}
                />
                <Pagination
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            }
          />
          <Route
            exact
            path="/watch-list"
            element={<MovieWatchListContainer setPopData={setPopData} />}
          />
        </Routes>

        {/* <Route path="/pop-card" element={<PopMovieCard data={popData}/>}/> */}
        {popData && <PopMovieCard data={popData} setPopData={setPopData}/>}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
