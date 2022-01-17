import Topbar from "./components/navbar/topbar";
import Home from "./components/homePage/home";
import Footer from "./components/footer/footer";
import NotFound from "./components/notFound/notFound";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import AddMovie from "./components/addMovie/addMovie";
import Details from "./components/movieDetails/movieDetails";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Topbar />
      </div>

      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
            <Route path="/add" component={AddMovie} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
