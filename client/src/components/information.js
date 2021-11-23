import { Link } from 'react-router-dom'
import Cards from '../Cards';

function Information() {
    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Información</h2>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            <Cards/>
        </main>
    )
}

export default Information;