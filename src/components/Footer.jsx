import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container align-items-center py-5">
        <div className="row text-center gy-4 justify-content-center">

          <div className="col-md-4 align-items-center">
            <h6 className="text-uppercase fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-light text-decoration-none" to="/services">Services</Link></li>
              <li><Link className="text-light text-decoration-none" to="/about">About</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 align-items-center">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li><a className="text-light text-decoration-none" href="tel:+19045551234">(904) 555-1234</a></li>
              <li><a className="text-light text-decoration-none" href="mailto:stylecutsbarbershop@gmail.com">stylecutsbarbershop@gmail.com</a></li>
              <li>
                <a
                  className="text-light text-decoration-none"
                  href="https://maps.google.com/?q=Jacksonville+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jacksonville, FL
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 align-items-center">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <ul className="list-unstyled">
              <li><a className="text-light text-decoration-none" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-light text-decoration-none" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center py-3">
        <small>© {new Date().getFullYear()} Style Cuts Barbershop. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
