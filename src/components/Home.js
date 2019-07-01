import React from "react";
import { Link } from "react-router-dom";


class Home extends React.Component {
    render() {
        return ( < section className = "Home" >
    <header className="Header">
        <div className = "Router" >
        <h1 className="text"> MYRNA  MARES</h1>
        <Link className="Routprojects" to = "/Projects" >Proyectos</Link>
        <Link className="Routcontact" to = "/Contact" >Contacto</Link>
        </div >
    </header>
        <div className="container">
        <div className= "AboutMe">
        <h2>Quien soy:</h2>
        </div>

        <div className="Text">
        <p>Me considero una mujer multidisciplinaria realmente interesada 
        en el desarrollo humano y profesional, mis habilidades me permiten realizar 
        múltiples actividades de manera eficiente. Las áreas en las que estoy enfocado 
        son la tecnología y la programación, específicamente el front-end, siempre 
        estoy aprendiendo y tratando de adquirir nuevos conocimientos y habilidades.</p>
        </div>

        </div>
          
    <aside>
        <a className="git" target="_blank" href="https://github.com/myrna90"><img src="https://image.flaticon.com/icons/svg/25/25231.svg"/></a>
        <a className="linkdin" target="_blank" href="https://www.linkedin.com/in/myrna-mares-cabello/"><img src="https://image.flaticon.com/icons/svg/34/34405.svg"/></a>
        <a className="curriculum" target="_blank" href="https://drive.google.com/open?id=1p1cE4UICYM3hqHg6ytqoRzOsrZRr49Zm"><img src="https://www.flaticon.es/premium-icon/icons/svg/1895/1895114.svg"/></a>
    </aside>
            
            </section>
        )
    }
}

export default Home;