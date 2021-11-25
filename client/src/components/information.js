import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react';
import Cards from '../Cards';
//import { getNews } from './helper';

function Information() {
    // const news = useRef([]);
    // useEffect(() => {
    //     news.current = getNews.get()
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    // }, [])
    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Información</h2>
            <div>
                {/* {news.current} */}
            </div>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            <Cards/>
        </main>
    )
}

export default Information;