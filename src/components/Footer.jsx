import "../styles/Footer.scss";
import logo from "../assets/Frame 484821.png"
import location from '../assets/round-place-24px.png'
import phone from '../assets/round-phone-24px.png'
import instagram from '../assets/instagram black.1.png'
import linkedin from '../assets/linkedin black.1.png'
import youtube from '../assets/Youtube.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={logo} alt="ExpenseBook" />
        </div>
        <div className="footer__leftdiv"> 
        <div className="footer__contact">
          <p>
            <i className="fas fa-map-marker-alt"><img src={location} style={{width:"17px",marginTop:'3px'}} /></i> Address
          </p>
          <p>
            <i className="fas fa-phone-alt"><img src={phone} alt="" style={{width:"17px",marginTop:'3px'}} /></i> +91 1234567890
          </p>
        </div>
        <div className="footer__social">
          <span>Social Media</span>
          <div className="footer__social-icons">
            <i className="fab fa-linkedin"><img src={linkedin} alt="" style={{width:"17px",marginTop:'3px'}} /></i>
            <i className="fab fa-youtube"><img src={youtube} alt="" style={{width:"17px",marginTop:'3px'}} /></i>
            <i className="fab fa-instagram"><img src={instagram} alt="" style={{width:"17px",marginTop:'3px'}} /></i>
          </div>
        </div>
        </div>
      </div>
      <div className="footer__bottom">
        <nav className="footer__nav">
          <a href="/blogs">Blogs</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/integrations">Integrations</a>
        </nav>
        <p className="footer__copyright">
          Copyright © 2024 ExpenseBook
        </p>
      </div>
    </footer>
  );
};

export default Footer;
