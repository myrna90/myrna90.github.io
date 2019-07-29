import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends React.Component {
    render(){
        return(
            <Switch>
            <Route exact path="/" Component={Home}/>
            <Route path="/Aboutme" Component={Aboutme}/>
            <Route path="/Projects" Component={Projects}/>
            <Route path="/Contact" Component={Contact}/>
            </Switch>
        )
    }

}

export default Main;