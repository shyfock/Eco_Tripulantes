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
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <section className="name-eco">
                    <h1>Ecotripulantes</h1>
                    <p className="g-4 container">Una plataforma diseñada para crear una comunidad que desee mejorar su huella de carbono, mejorando la clasificación de sus residuos. Te da la posibilidad de conetarte con diferentes personas y publicar los objetos que ya no desees de tu hogar.</p>
                </section>
                <section className="card-style ">
                    <section className="mt-4 container">
                    <section className="g-4 row ">

                    <Card style={{
                        width: '18rem',
                        height: '40rem'
                    }}>
                        <Card.Img variant="top" src="" alt="Sin imagen" />
                        <Card.Body>
                        <Card.Title>Residuos</Card.Title>
                        <Card.Text style={{overflow: "scroll", height: "15rem"}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Footer>
                            Andres 
                        </Card.Footer>
                        <Card.Footer style={{fontSize: "70%"}}>
                            Publicado: 12/02/2021
                        </Card.Footer>
                        <Button variant="primary" href="/information" >Ver más</Button>
                        </Card.Body>
                    </Card>
                        <Card style={{ width: '18rem', marginTop: '20px', marginRigh: '15px' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', marginTop: '20px' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', marginTop: '20px' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card> 
                    </section>

                    </section>
                </section>
        </div>
    );
}

export default Home;