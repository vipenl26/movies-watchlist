import "./App.css";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyNav from "./components/Navbar/MyNav";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer/Footer";
import PopMovieCard from "./components/PopMovieCard/PopMovieCard";
const App = () => {
  const [popData, setPopData] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
      <MyNav/>
      <MovieContainer setPopData={(data)=>setPopData(data)}/>
      <Routes>
        <Route exact path="/pop-card" element={<PopMovieCard data={popData}/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
