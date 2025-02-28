import { Link } from "react-router-dom"
import '../../styles/error.css'

const Error = () => {
    return (
        <div className="container-error">
            <h1>404</h1>
            <Link to="/">back home</Link>
        </div>
    )
}

export default Error