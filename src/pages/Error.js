import { Link } from "react-router-dom";
function Error() {
    return (
       <section>
            <h1 className="error">
                Error 404 Not Found 
                <Link to='/' className="error-back">
                    <button>Back Home</button>
                </Link>
            </h1>
       </section>
    );
}

export default Error;