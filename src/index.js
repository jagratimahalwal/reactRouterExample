import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/Home";
import AboutPage from "./components/about/About";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursePage from "./components/course/CoursePage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
