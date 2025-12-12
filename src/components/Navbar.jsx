import { Link } from 'react-router-dom'

const Navbar = () => {
    return (    
        <nav className="navbar navbar-expand-lg shadow-sm fixed-top py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/"><i className="fa-solid fa-scissors"></i> Style Cutz</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto fw-semibold">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>                        
                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

                        </ul>
                        
                    <Link to="/contact" className="btn btn-dark  ms-3">Book Now</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar