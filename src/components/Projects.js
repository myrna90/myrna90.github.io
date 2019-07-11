import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Projects extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <h1>Proyectos</h1>
                    </Col>

                    <Col>
                    <a className="pokemon" href="https://myrna90.github.io/GDL002-data-lovers/src/" target="_blank"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9ea570b-8fd6-46cc-a9b7-8cd934e1d04b/d57olyy-a9269476-c049-4797-9c9c-14247925210c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5ZWE1NzBiLThmZDYtNDZjYy1hOWI3LThjZDkzNGUxZDA0YlwvZDU3b2x5eS1hOTI2OTQ3Ni1jMDQ5LTQ3OTctOWM5Yy0xNDI0NzkyNTIxMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nFqS5elQimBQAxyb8kcZ1rAN730MDipB5PSZgBRbPUk"/></a>
                    <a className="restaurant" href="https://myrna90.github.io/GDL-open-house/" target="_blank"><img src="https://ae01.alicdn.com/kf/HTB1Uv8zKVXXXXaLXFXXq6xXFXXXI/Custom-vintage-retro-style-three-dimensional-letters-industry-Internet-restaurant-cafe-bar-KTV-bicycle-brick-pattern.jpg_640x640.jpg"/></a>
                    <a className="social" href="https://myrna90.github.io/GDL002-social-network/src/ " target="_blank"><img src="https://laclasedelola.files.wordpress.com/2015/11/img-redes-1.png"/></a>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Projects;