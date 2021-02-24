
import React from 'react';
import ElysiaLogo from '../../shared/image/Elysia_Logo.png';
import './css/style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={ElysiaLogo} className="elysia-logo" alt="Elysia" />
      </Link>
    </header>
  );
}

export default Header;
