import "./App.css";
import MyNav from "./components/MyNav";
import MovieContainer from "./components/MovieContainer";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <MyNav/>
      <MovieContainer/>
      <Footer/>
      
    </div>
  );
}

export default App;
