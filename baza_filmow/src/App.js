import Navbar from "./components/navbar/navbar";
import Movie from "./components/movies/movie";
import Footer from "./components/footer/footer";
// import NotFound from "./components/notFound";
// import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Movie />
      </div>

      {/* <div className="container">
        <div className="content">
          <Movie />
          <Switch>
            <Route path="/home" component={Movie} />
            <Route path="not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div> */}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
