import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "react-bootstrap/Navbar";

class Home extends React.Component {
    render() {
        return ( < section className = "Home" >
    {/*<hr></hr>*/}
        <div className = "Name" >
            <h1> MYRNA MARES</h1>
        </div >
    {/*<hr></hr>*/}
        <div className = "Router" >
        <Link className="Routcurriculum" to = "/Curriculum" >Curriculum</Link>
        <Link className="Routproyects" to = "/Proyects" >Proyects</Link>
             </div >

        <div className="img1"></div>
        <div className="img2"></div>
            
            </section>
        )
    }
}

export default Home;