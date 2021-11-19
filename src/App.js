import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyNav from "./components/Navbar/MyNav";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer/Footer";
import PopMovieCard from "./components/PopMovieCard/PopMovieCard";
import Pagination from "./components/Pagination/Pagination";
const App = () => {
  const [popData, setPopData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    localStorage.setItem("liked",JSON.stringify([]));
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <MyNav/>
      <MovieContainer setPopData={setPopData} currentPage={currentPage}/>
      <Routes>
        <Route exact path="/pop-card" element={<PopMovieCard data={popData}/>}/>
      </Routes>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
