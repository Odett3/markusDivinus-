import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import AboutUs from "./Components/AboutUs"
import Events from './Components/Events';
import ZafranaWinery from './Components/ZafranaWinery';
import OurWines from "./Components/OurWines"
import NavBar from "./Components/NavBar"

function App() {

 
  return (

    <>
    <NavBar />
    <Switch> 
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutUs} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/winery" component={ZafranaWinery} />
    <Route exact path="/wines" component={OurWines} />
    
    </Switch>
    </>
  );
}

export default App;
