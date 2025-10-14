// components/NavBar/NavLinks.tsx
// Enlaces de navegación principales (Inicio, Explorar)

import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
          to="/"
        >
          Inicio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
          to="/explore"
        >
          Explorar
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
