import { Link } from 'react-router-dom'

function Profile() {
    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Perfil de Usuario</h2>
            <div>
                <Link to='/home'>Home</Link>
            </div>
        </main>
    )
}

export default Profile;