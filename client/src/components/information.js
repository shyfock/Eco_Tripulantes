import { Link } from 'react-router-dom'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import { useEffect, useRef, useCallback, useState } from 'react';
import InfoCard from './cards/Cards';
//import axios from 'axios';
//import { getNews } from './helper';

function Information() {

    //const [news, setNews] = useState(' ')
    const api_key = '3dd4e8b285864742ad68c62696ff7d12';
    const endPoint = 'top-headlines';
    const category = 'health';
    const sources = 'techcrunch';
    const sorted = 'popularity';
    const keyWord = 'health';
    const lang = 'es';
    const date = '2021-11-25';
    const url = `https://newsapi.org/v2/${endPoint}?sources?language=${lang}&category=${keyWord}&from=${date}&sortBy=${sorted}&apiKey=${api_key}`;


    const getNews = () => {(
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setNews(response.data);
                console.log({"News: ": news})
            })
            .catch((err) => {
                console.error(err);
            })
        )
    }

    const [news, setNews] = useState([]);
    // useCallback(() => ( 
    //         fetch(url)
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((response) => {
    //                 setNews(response);
    //                 console.log({"News: ": news})
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //             })
            
    // ), [news, url])

    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Información</h2>
            <div>
                <div type="button" onClick={this.getNews}>Run</div>
            </div>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            {/* <CardGroup>
                <Cards/>
            </CardGroup> */}
            
            <Row xs={1} md={2} lg={3} xl={4} xxl={6} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <InfoCard
                            title="Título"
                            description="Descripción"
                            author="Autor"
                        />
                    </Col>
                ))}
            </Row>
        </main>
    )
}

export default Information;