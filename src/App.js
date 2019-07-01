import React from 'react';
import './index.css';
import {HashRouter,Link, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Button from "react-bootstrap/Button";

function App() {
  return (
   <section className="App">
     <HashRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Projects" component={Projects}/>
      <Route path="/Contact" component={Contact}/>
    </Switch>
     </HashRouter>
   </section>
  );
}

export default App;
