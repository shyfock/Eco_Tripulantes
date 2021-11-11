import { useParams, useNavigate } from 'react-router-dom'
import { getPublication, deletePublication } from '../data'

function Publication() {
    let navigate = useNavigate();
    let params = useParams();
    let publication = getPublication(parseInt(params.publicationId, 10))
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total Due: {publication.amount}</h2>
            <p>
                {publication.name}: {publication.number}
            </p>
            <p>
                Due Date: {publication.due}
            </p>
            <p>
                <button
                    onClick={() => {
                        deletePublication(publication.number);
                        navigate("/publications");
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    )
}

export default Publication;