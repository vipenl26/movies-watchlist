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
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/movies-watchlist/browse"
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
            path="/movies-watchlist/watch-list"
            element={<MovieWatchListContainer />}
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
