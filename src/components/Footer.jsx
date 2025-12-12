import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+19045551234">(904) 555-1234</a>
            </li>
            <li>
              <a href="mailto:stylecutsbarbershop@gmail.com">
                stylecutsbarbershop@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Jacksonville+FL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jacksonville, FL
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Style Cuts Barbershop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
