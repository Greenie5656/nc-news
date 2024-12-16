import { Link } from "react-router-dom";

const Topics = () => {
    return (
    
        <nav className="topics-nav">
            <Link to="/">All</Link>
            <Link to="/topics/football">Football</Link>
            <Link to="/topics/coding">Coding</Link>
            <Link to="/topics/cooking">Cooking</Link>
        </nav>
 
    )
}

export default Topics