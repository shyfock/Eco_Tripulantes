import { Link } from 'react-router-dom'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import React from 'react';
import InfoNews from './news';

/* `https://newsapi.org/v2${this.state.endPoint}?sources?language=${this.state.lang}&category=${this.state.keyWord}&from=${this.state.date}&sortBy=${this.state.sorted}&apiKey=${this.state.api_key}` */

let url = `http://api.mediastack.com/v1/news?&categories=general&languages=es,en&keywords=reciclaje&access_key=602d7212e63a38c25fdeeef8324ec600`;
/*  */
class Information extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            api_key: '602d7212e63a38c25fdeeef8324ec600',
            endPoint: 'top-headlines',
            category: 'bussines',
            sources: 'techcrunch',
            sorted: 'popularity',
            keyWord: '',
            lang: 'es,en',
            date: '2021-11-28'
        };
    }

    // kwSearch() {
    //     url = `http://api.mediastack.com/v1/news?&categories=general&languages=es,en&keywords=${this.state.keyWord}&access_key=602d7212e63a38c25fdeeef8324ec600`;
    //     return url;
    // }
    // componentDidMount() {
    //     this.getUrl();
    //     console.log(url)
    // }

    // getUrl() {
    //     url = `http://api.mediastack.com/v1/news?access_key=${this.state.api_key}`;
    // };

    render () {
        return (
            <main
                style={{ padding: "1rem 0" }}
            >
                <h2 style={{
                        margin: "10px"
                        }}>Información</h2>
                <div>
                <InputGroup 
                    className="mb-3" 
                    style={{
                        width: "30%",
                        marginLeft: "10px"
                        }}
                >
                    <Button 
                        variant="outline-secondary"
                        id="button-addon1"
                        // onClick={() => {this.kwSearch()}}
                    >
                    Buscar
                    </Button>
                    <FormControl
                        id="search"
                        // onChange={(e) => this.setState({keyWord: e.target.value})}
                        placeholder="Palabra clave"
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                    />{/* {this.state.keyWord} */}
                </InputGroup>
                </div>
                <div>
                    
                </div>
                <hr/>
                <div>
                    <InfoNews
                        url={url}
                    />
                </div>
            </main>
        )
    }
}

export default Information;