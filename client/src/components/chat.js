import { Link } from 'react-router-dom'

function Chat() {
    return (
        <main
            style={{ padding: "1rem 0" }}
        >
            <h2>Chat</h2>
            <div>
                <Link to='/home'>Home</Link>
            </div>

        </main>
    )
}

export default Chat;