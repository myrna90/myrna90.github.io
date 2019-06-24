import React from 'react';
import './index.css';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Proyects from "./components/Proyects";
import Button from "react-bootstrap/Button";

function App() {
  return (
   <section className="App">
     <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Curriculum" component={Curriculum}/>
      <Route path="/Proyects" component={Proyects}/>
    </Switch>
     </BrowserRouter>
   </section>
  );
}

export default App;
