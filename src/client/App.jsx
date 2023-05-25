import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/TestComponent/About";
import Nav from "./components/TestComponent/Nav";
import Home from "./components/TestComponent/Home";
import AddYourMeal from "./components/TestComponent/AddYourMeal";
import Meal from "./components/TestComponent/Meal";
import MealsList from "./components/TestComponent/MealsList";
import Footer from "./components/TestComponent/Footer";
import Reservation from "./components/TestComponent/Reservation";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Meal-list" component={MealsList} />
          <Route exact path="/add-your-meal" component={AddYourMeal} />
          <Route path="/meals/:id" component={Meal} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
