import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.scss';
import icon from '../assets/Frame 484821.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={icon} alt="ExpenseBook Logo" />
        </div>
        <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <a href="#" className="navbar__link">Home</a>
          <a href="#" className="navbar__link">Features</a>
          <a href="#" className="navbar__link">Pricing</a>
          <a href="#" className="navbar__link">Contact</a>
          <button className="button">
            Start Trial
          </button>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;