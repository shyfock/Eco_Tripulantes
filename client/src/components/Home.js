import React from 'react';
import logo from '../assets/logo.png';
import img1 from '../assets/img/imgen2.png';
import img2 from '../assets/img/imgen3.png';
import img3 from '../assets/img/imgen4.png';
import img from '../assets/img/imgen1.png';

import { Carousel, Card, Button } from 'react-bootstrap';

function Home() {
    return (
        <div className=" text-center">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
                <section className="name-eco">
                    <h1>Ecotripulantes</h1>
                    <p className="g-5 container">Una plataforma diseñada para crear una comunidad que desee mejorar su huella de carbono, mejorando la clasificación de sus residuos. Te da la posibilidad de conetarte con diferentes personas y publicar los objetos que ya no desees de tu hogar.</p>
                </section>
                <section className="card-style">
                    <section className="mt-5 container">
                    <section className="g-5 row ">
                        <h1 className="name-eco">Noticias</h1>

                        <Card style={{ width: '18rem', margin: '20px 3px 0px 0px' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Footer style={{fontSize: "70%"}}>
                            Publicado: 12/02/2021
                        </Card.Footer>
                        <Button variant="primary" href="/information" >Ver más</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: '20px 3px 0px 0px' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Footer style={{fontSize: "70%"}}>
                            Publicado: 12/02/2021
                        </Card.Footer>
                        <Button variant="primary" href="/information" >Ver más</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: '20px 3px 0px 0px' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Footer style={{fontSize: "70%"}}>
                            Publicado: 12/02/2021
                        </Card.Footer>
                        <Button variant="primary" href="/information" >Ver más</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: '20px 3px 0px 0px' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Footer style={{fontSize: "70%"}}>
                            Publicado: 12/02/2021
                        </Card.Footer>
                        <Button variant="primary" href="/information" >Ver más</Button>
                            </Card.Body>
                        </Card>
                    </section >

                    </section>
                </section >
                <section>
                <Card className="text-center name-eco team">
                    <Card.Header>Equipo Teams</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <p className="g-5 container">Somos un equipo de trabajo conformado por 5 integrantes con ambicion por el conocimiento autonomo, 
                        apasionados por la programación y el desarrollo de herramientas tecnologicas que generen impacto 
                        en la sociedad.</p>
                        </Card.Text>
                        <Button variant="primary" href="/team">Ver más</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                    

                </section>
        </div>
    );
}

export default Home;