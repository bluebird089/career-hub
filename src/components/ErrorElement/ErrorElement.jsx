import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <h3>Oops!! 404 Not Found</h3>
            <Link to="/" className="btn">Go Back To Home</Link>
        </div>
    );
};

export default ErrorElement;