// components/Navbar.tsx
// Barra de navegación con enlaces y opciones de autenticación

import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          StreamPlatform
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
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

          <form className="d-flex me-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Buscar streams..."
              aria-label="Buscar"
            />
          </form>

          {/* Opciones según estado de autenticación */}
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                {/* Usuario autenticado */}
                <Link to="/profile" className="btn btn-outline-light btn-sm">
                  👤 {user.name}
                </Link>
                <Link to="/panelcreador" className="btn btn-primary btn-sm">
                  Panel de creador
                </Link>
                
                <button 
                  onClick={logout} 
                  className="btn btn-outline-danger btn-sm"
                >
                  Salir
                </button>
                
              </>
            ) : (
              <>
                {/* Usuario no autenticado */}
                <Link to="/login" className="btn btn-outline-light btn-sm">
                  Iniciar Sesión
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm">
                  Registrarse
                </Link>
                
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;