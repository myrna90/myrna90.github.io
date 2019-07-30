import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => (
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Aboutme" component={Aboutme}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact}/>
            </Switch>  
)
    
export default Main;