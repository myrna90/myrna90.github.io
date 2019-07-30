import React from "react";
import { Grid, Cell } from "react-mdl";


class Aboutme extends React.Component {
    render() {
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:"center"}}>
                        <img style={{height:"20em", width:"20em"}} className="img-logo" src="https://gifimage.net/wp-content/uploads/2017/10/coraje-el-perro-cobarde-gif-9.gif"/>
                        </div>

                        <h2 style={{paddingTop: "2em"}}>Myrna Mares</h2>
                        <h4 style={{color:"grey"}}>Programmer</h4>
                        <hr style={{borderTop: ".4em solid #6576b4", width:"50%"}}/>
                        <p>Soy una persona dinamica, didicada a la progración, me gusta aprender nuevos conocimientos, disciplinas  y tecnologías.<hr/>
                            Me encanta salir y conocer nuevos lugares, uno de mis pasatiempos favoritos es escuchar musica, me encanta conocer gente nueva, 
                            me concidero una persona alegre.</p>
                        <hr style={{borderTop: ".4em solid #6576b4", width:"50%"}}/>

                        
                    </Cell>
                    <Cell className="resume-rigth" col={8}>
                    <h5>Mis Soft Skills</h5>
                        <div className="content-skills">
                        <p>Trabajo en equipo</p>
                        <p>Auto-aprendizaje</p>
                        <p>Creativa</p>
                        <p>Inovadora</p>
                        <p>Comprometida</p>
                        <p>Mejora continua</p>
                        <p>Resolutiva</p>
                        </div>
                        
                        <h5>Mis pasatiempos</h5>
                        <div className="content-hobies">
                        <a><img src="https://image.flaticon.com/icons/svg/67/67037.svg"/></a>
                        <a><img src="https://image.flaticon.com/icons/svg/1077/1077134.svg"/></a>
                        <a><img src="https://image.flaticon.com/icons/svg/10/10869.svg"/></a>
                        <a><img src="https://image.flaticon.com/icons/svg/201/201623.svg"/></a>
                        <a><img src="https://image.flaticon.com/icons/svg/1728/1728673.svg "/></a>
                        </div>
                    </Cell>
                </Grid>

        {/*
        <img className="img-logo" src="https://i.pinimg.com/originals/e9/7d/aa/e97daa12a1d28bcb58fa2c7fdc6bf39d.gif"/>*/}
            </div>
            
        )
    }
}

export default Aboutme;