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

    const [news, setNews] = useState([]);

    const getNews = async () => {(
        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setNews(response);
                console.log({"News: ": news})
            })
            .catch((err) => {
                console.error(err);
            })
        )
    }

    useEffect(getNews, [news, url])
    useCallback(() => {
        for (let index = 0; index < news.articles.length; index++) {
            const element = news.articles[index];
        }}
    , [news.articles])
    

    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Información</h2>
            <div>
                <button onClick={getNews}>Run</button>
            </div>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            {/* <CardGroup>
                <Cards/>
            </CardGroup> */}
            
            <Row xs={1} md={2} lg={3} xl={4} xxl={6} className="g-4">
                {Array.from({ length: news["articles"].length() }).map((_, idx) => (
                    <Col>
                        <InfoCard
                            title={news["articles"][idx]}
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