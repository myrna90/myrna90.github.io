import React from "react";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
        return ( < section className = "Home" >
    <header className="Header">
        <div className="title">
            <h1> MYRNA  MARES</h1>
        </div >
    
        <div className = "Router" >
        <Link className="Routprojects" to = "/Projects" >Proyectos</Link>
        <Link className="Routcontact" to = "/Contact">Contacto</Link>
        </div >
    </header>
        <div className= "AboutMe">
        <h2>Sobre mi:</h2>
        </div>

        <div className="Text">
        <text>Me considero una mujer multidisciplinaria realmente interesada 
        en el desarrollo humano y profesional, mis habilidades me permiten realizar 
        múltiples actividades de manera eficiente. Las áreas en las que estoy enfocado 
        son la tecnología y la programación, específicamente el front-end, siempre 
        estoy aprendiendo y tratando de adquirir nuevos conocimientos y habilidades.</text>
        </div>
        
    <aside>
        <a className="git" href="https://github.com/myrna90" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg"/></a>
        <a className="linkdin" href="https://www.linkedin.com/in/myrna-mares-cabello/" target="_blank"><img src="https://image.flaticon.com/icons/svg/34/34405.svg"/></a>
        <a className="curriculum" href="https://drive.google.com/open?id=1WdigbqSb-2eRjgOnIkXRTytIGxtIUgp8" target="_blank"><img src="https://www.flaticon.es/premium-icon/icons/svg/1895/1895114.svg"/></a>
    </aside>
            
            </section>
        )
    }
}

export default Home;