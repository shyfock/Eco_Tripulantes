import { Row, Card, Col } from 'react-bootstrap';
import  logo  from '../assets/user.jpg';

function Profile() {
    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <section>
                <Card className="text-center name-eco team-page">
                    <Card.Header>Equipo Teams</Card.Header>
                    <Card.Body className="card-team">
                        <Card.Text>
                        <p className="g-5 container">Somos un equipo de trabajo conformado por 5 integrantes con ambicion por el conocimiento autonomo, 
                        apasionados por la programación y el desarrollo de herramientas tecnologicas que generen impacto 
                        en la sociedad.</p>
                        </Card.Text>
                    </Card.Body>
                    
    
                </Card>
                <Row xs={1} md={2} lg={3} className="team-img1">
                
                    <Card className="team-img">
                        <Card.Img variant="top" className="img" src={logo} />
                        <Card.Body >
                        <Card.Title>Andrés Vanegas</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Desallorador Backend</small>
                        </Card.Footer>
                    </Card>
                    <Card className="team-img">
                        <Card.Img variant="top" className="img" src={logo} />
                        <Card.Body>
                        <Card.Title>Marcela Patiño</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Desarrolladora Frontend</small>
                        </Card.Footer>
                    </Card>
                    <Card className="team-img">
                        <Card.Img variant="top" className="img" src={logo} />
                        <Card.Body>
                        <Card.Title>Lorena Garcia</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Desarrolladora Backend</small>
                        </Card.Footer>
                    </Card>
                    <Card className="team-img">
                        <Card.Img variant="top" className="img" src={logo} />
                        <Card.Body>
                        <Card.Title>Martha Lucia</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Base de datos</small>
                        </Card.Footer>
                    </Card>
                    <Card className="team-img">
                        <Card.Img variant="top" className="img" src={logo} />
                        <Card.Body>
                        <Card.Title>Alexander </Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Desarrollador</small>
                        </Card.Footer>
                    </Card>
                    
                
                       
                    </Row>
                    

                </section>
        </main>
    )
}

export default Profile;