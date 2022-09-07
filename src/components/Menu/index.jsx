import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/cadastro/video">
        <img className="Logo" src={Logo} alt="Dev FLix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
