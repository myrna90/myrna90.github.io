import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";


class Contact extends React.Component{
    render(){
        return(
            
        <div className="contact-body">
             <Grid className="contact-grid">
                 <Cell col={6}>
                     <div>
                     <h2>Myrna Mares</h2>
                     <img src="https://media1.tenor.com/images/71bf5ad3f640b0a58d9cf01fd51b7c81/tenor.gif?itemid=9021603" style={{height: "40%", width: "40%"}}/>
                     <p>Si quieres ponerte en contacto conmigo estos son los medios por los cuales estoy disponible.</p>
                     <h3>Gracias por visitarme</h3>
                     </div>                    
                 </Cell>
                 <Cell col={6}>
                
                    <div className="contact-list">
                    <h2>Contactame</h2>
                     <hr/>
                     <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: "1.5em", fontFamily: "Anton"}}>
                                <img src="https://png.pngtree.com/element_origin_min_pic/16/12/04/dafa1bcc15a62fa03b79def7d007cde4.jpg" style={{width: "12%"}}/>
                                myrnamares90@gmail.com</ListItemContent>
                        </ListItem>
                        {/*<ListItem>
                            <ListItemContent style={{fontSize: "1.5em", fontFamily: "Anton"}}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/1200px-Facebook_F_icon.svg.png" style={{width: "12%"}}/>
                                Myrna Mares Cabello
                            </ListItemContent>
                        </ListItem>*/}
                        <ListItem>
                        <ListItemContent style={{fontSize: "1.5em", fontFamily: "Anton"}}>
                                <img src="https://www.educativa.com/wp-content/uploads/2014/01/twitterenformacion.png" style={{width: "15%"}}/>
                                @mares_myrna
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                     
                 </Cell>
             </Grid>
        </div>
        )
    }
}

export default Contact;