import React from "react";
import { Row, Col } from "react-bootstrap";
import InfoCard from "../cards/Cards";


class InfoNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }
    
    componentDidMount() {
        this.getNews();
    }

    async getNews() {
        await fetch(this.props.url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            this.setState({news: response.data});
            console.log(this.state.news)
        })
        .catch((err) => {
            console.error(err);
        })
    }
    render() {
        const infoProv = this.state.news;
        // Mostrar solo resultados con imágenes
        const info = infoProv.filter(img => img.image !== null);
        return (
            <Row xs={1} md={2} lg={3} xl={4} xxl={6} className="g-4">
                {Array.from({ length: info.length }).map((_, idx) => (
                    <Col>
                        <InfoCard
                            title={info[idx].title}
                            author={info[idx].author}
                            description={info[idx].description}
                            image={info[idx].image}
                            url={info[idx].url}
                            date={info[idx].published_at}
                        />
                    </Col>
                ))}
            </Row>
        );
    }
}
export default InfoNews;