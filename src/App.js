import React from 'react';
import './index.css';
import {HashRouter,Link, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Button from "react-bootstrap/Button";

function App() {
  return (
   <section className="App">
     <HashRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Projects" component={Projects}/>
    </Switch>
     </HashRouter>
   </section>
  );
}

export default App;
