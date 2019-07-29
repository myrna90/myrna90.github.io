import React, {Component} from 'react';
import './App.css';
import {HashRouter,Link, Route, Switch} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";



class App extends Component{
  render(){
    return (
        <div className="demo-big-content" title="My Portafolio" scroll style={{color:"#2271b3"}}>
        <Layout>
            <Header className="header-color" title="Myrna Mares" scroll style={{color:"#2271b3"}}>
                <Navigation>
                    <Link to="/" style={{color:"#2271b3"}}>Home</Link>
                    <Link to="/Aboutme" style={{color:"#2271b3"}}>Acerca de mí</Link>
                    <Link to="/Projects" style={{color:"#2271b3"}}>Proyectos</Link>
                    <Link to="/Contact" style={{color:"#2271b3"}}>Contacto</Link>
                </Navigation>
            </Header>
            <Drawer title="Title" style={{color:"#2271b3"}}>
                <Navigation className="content-text">
                    <Link to="/" style={{color:"#2271b3"}}>Home</Link>
                    <Link to="/Aboutme" style={{color:"#2271b3"}}>Acerca de mí</Link>
                    <Link to="/Projects" style={{color:"#2271b3"}}>Proyectos</Link>
                    <Link to="/Contact" style={{color:"#2271b3"}}>Contacto</Link>
                </Navigation>
      </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
      );
  }
    
}

export default App;
