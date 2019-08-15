import React from "react";
import { Grid, Cell} from "react-mdl";  


class Home extends React.Component {
    render() {
        return ( 
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                       <h1 className="name">Myrna | Mares</h1>
                    
                        <div className="b-text">
                            <h1>Front End Developer</h1>
                        <hr/> 
                        <p>JavaScript | HTML/CSS | React | NodeJs | MongoDB | Postman | Express | Api's | Git | GitHub | Firebase | Figma</p>
                        
                        <div className="social-links">
                            {/* Github*/}
                            <a href="https://github.com/myrna90" target="_blank" rel="noopener noreferrer">
                            <img src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                            </a>
                              
                            {/* LinkdIn*/}
                            <a href="https://www.linkedin.com/in/myrna-mares-cabello/" rel="noopener noreferrer" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/34/34405.svg"/>
                            </a>

                            {/* CV*/}
                            <a href="https://drive.google.com/open?id=1AyXnFwE_pl_mgAtUzN_QbZ3RK5kVG48x" rel="noopener noreferrer" target="_blank">
                            <img src="https://www.flaticon.es/premium-icon/icons/svg/1895/1895114.svg"/>
                            </a>
                             
                        </div>
                        </div>
                        <div className="content-gif">
                            <a><img className="img-gif" src="https://media1.tenor.com/images/d6a83a2a3e628b4ce196f5cea11db932/tenor.gif?itemid=3296529"/></a>
                            <a><img className="img-gif" src="https://i.kym-cdn.com/photos/images/original/000/874/714/e73.gif"/></a>
                            <a><img className="img-gif" src="https://2.bp.blogspot.com/-DYq5ykFY2bs/WN_SNW_xI3I/AAAAAAAA__8/VyeyJFGHX-A0qAN7cKFqeihcHNfiPikbACLcB/s1600/s-28.gif"/></a>
                        </div>
                    </Cell>
                </Grid>
        </div>
        )
    }
}

export default Home;