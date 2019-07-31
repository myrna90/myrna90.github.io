import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";


class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
        }
        
        toggleCategories(){
        if (this.state.activeTab === 0) {

        return(
        <div className="projects-grid">

            {/*Project 1*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://upload.wikimedia.org/wikipedia/commons/2/2b/Caesar3.svg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Cipher Code<hr/>Este proyecto se trata del manejo de codigos a tra vez del cifrado césar.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/gdl-2019-01-bc-core-cipher" target="_blank">GitHub</Button>
            <Button colored href="https://myrna90.github.io/gdl-2019-01-bc-core-cipher/src/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://storage.googleapis.com/noticiasweb/images/2019/02/poke%CC%81mon.jpg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            PokeDex<hr/>Este proyecto se trata del manejo de base de datos, la cual se realizo con la tematica de Pokemon Go.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL002-data-lovers" target="_blank">GitHub</Button>
            <Button colored href="https://myrna90.github.io/GDL002-data-lovers/src/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        
        {/*Project 3*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://lideresmexicanos.com/wp-content/uploads/2018/03/Mundo-joven.jpg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Wo Travel<hr/>Es una red social dedicada a mujeres que les gusta viajar, y quieren seguridad durante su viaje.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL002-social-network" target="_blank">GitHub</Button>
            <Button colored href="https://myrna90.github.io/GDL002-social-network/src/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
            )
        } else if(this.state.activeTab === 1){
        return(
        <div className="projects-grid">
            {/*Project 1*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://content3.jdmagicbox.com/comp/gurgaon/a6/011pxx11.xx11.180831142455.s7a6/catalogue/burger-queen-sector-49-gurgaon-burger-joints-v6x83zks1u.jpg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Burger Queen<hr/>Este es un proyecto creado con ReactJs, el cual tiene una interfas para hacer los pedidos de un restaurat.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL002-burger-queen" target="_blank">GitHub</Button>
            <Button colored href="https://myrna90.github.io/GDL002-burger-queen/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        
        {/*Project 2*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://img.freepik.com/vector-gratis/ilustracion-logo-ubicacion-pin-icono-restaurante_15602-15.jpg?size=338&ext=jpg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Food Find<hr/>Es una interfaz realizada con ReactJS y conectada a la API de Google Maps, la cual realiza una búsqueda de restaurantes cerca de la ubicación actual del usuario.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL-open-house" target="_blank">GitHub</Button>
            <Button colored href="https://monicamun.github.io/GDL-open-house" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        
        {/*Project 3*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://miro.medium.com/max/1200/1*81GhGbn6cnJycDP92rBDqQ.png) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Tic Tac Toe<hr/>Este mobile game esta realizado con React Native, el cual consta de un tradicional juego de gato.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL002-mobile-game" target="_blank">GitHub</Button>
            <Button colored href="" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
            )
        } else if(this.state.activeTab === 2){
        return(
        <div className="projects-grid">
            {/*Project 1*/}
        <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
            <CardTitle style={{color: "#fff", height: "27vh", background: "url(https://content3.jdmagicbox.com/comp/gurgaon/a6/011pxx11.xx11.180831142455.s7a6/catalogue/burger-queen-sector-49-gurgaon-burger-joints-v6x83zks1u.jpg) center / cover"}}></CardTitle>
            <CardText style={{color: "#2271b3", justifyContent:""}}>
            Burger Queen Back-End<hr/>>Back-End de la interfas Burger Queen, este proyecto se realizo con NodeJs, Mongo Db, Express y Postman.
            </CardText>
            <CardActions border>
            <Button colored href="https://github.com/myrna90/GDL002-burger-queen-backend" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: "black"}}>
            <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
            )
        }
    }   
        render(){
        return(
        <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>JavaScript</Tab>
            <Tab>React</Tab>
            <Tab>MongoDB</Tab>
        </Tabs>
        <Grid>
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
        </Grid>
        </div>
        )
    }
}

export default Projects;