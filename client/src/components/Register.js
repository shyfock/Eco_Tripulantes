import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import "../App.css";
import { APP_HOST as host } from '../app.json'

const axios = require('axios').default;

export default class Register extends  React.Component {

    constructor(props) {
        super(props);
        this.state ={
            username: '',
            email: '',
            password: '',
        }
    }
    setRegister() {
        axios.post(`${host}/users/register`, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render () {
        return (
            <Container id="login-container" style={{ marginTop: 100}}>
                <Row className="form-login">
                    <Col className="columna-login">
                        <Row className="row1">
                        <img src={logo} alt="" className="row-logo" ></img>
                            <h1 style={{fontSize: 30}}>EcoTripulantes</h1>
                            <p>Una apuesta para ayudar al medio ambiente, mediante una comunidad</p>
                        </Row>
                    </Col>
                    <Col className="columna-form">
                    <Form className='formulario'>
                        <Form.Group >
                            <Form.Label className='labels'>Usuario</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    this.setState({username: e.target.value})
                                }
                                type="text"
                                placeholder="Usuario"
                                className='inputs'
                                autoComplete="username"
                            />
                            {/* {
                                this.state.username
                            } */}
                            <Form.Label className='labels'>Correo electrónico</Form.Label>
                            <Form.Control 
                            onChange={(e) =>
                                this.setState({email: e.target.value})
                            }
                            type="email" 
                            placeholder="correo@ejemplo.com"
                            className='inputs'
                            autoComplete="username" 
                            />
                            {/* {
                                this.state.email
                            } */}
                            <Form.Label className='labels'>
                                Contraseña
                            </Form.Label>
                            <Form.Control 
                                onChange={(e) =>
                                    this.setState({password: e.target.value})
                                }
                                type="password"
                                placeholder="Contraseña"
                                className='inputs'
                                autoComplete="new-password"
                            />
                            {/* {
                                this.state.password
                            } */}
                        </Form.Group>
                        <Button
                            variant="primary"
                            //type="submit"
                            style={{
                                marginTop: 20,
                                width: '100%'
                            }}
                            onClick={() => {
                                this.setRegister();
                            }}
                        >
                            Registrarme
                        </Button>
                        <Link className="link" to="/login">Iniciar sesión</Link>
                    </Form>
                    </Col>
                </Row>
            </Container>
        );    

    }


}
