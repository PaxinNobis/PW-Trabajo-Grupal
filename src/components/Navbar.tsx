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
                {/* RF009 - Mostrar saldo de monedas para viewers */}
                {user.role === 'viewer' && user.coins !== undefined && (
                  <div className="text-warning fw-bold me-2" style={{ fontSize: '1rem' }}>
                    💰 {user.coins} monedas
                  </div>
                )}
                
                {/* Menú desplegable de usuario */}
                <div className="dropdown">
                  <button 
                    className="btn btn-outline-light btn-sm dropdown-toggle" 
                    type="button" 
                    id="userDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    👤 {user.name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    {/* Opción: Ver Perfil */}
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        <i className="bi bi-person-circle me-2"></i>
                        Ver Perfil
                      </Link>
                    </li>
                    
                    <li><hr className="dropdown-divider" /></li>
                    
                    {/* Opción: Convertirse en Creador (solo para viewers) */}
                    {user.role === 'viewer' && (
                      <li>
                        <Link to="/convertirse-creador" className="dropdown-item">
                          <i className="bi bi-camera-video me-2"></i>
                          Convertirse en Creador
                        </Link>
                      </li>
                    )}
                    
                    {/* Opción: Panel de Creador (solo para streamers) */}
                    {user.role === 'streamer' && (
                      <li>
                        <Link to="/panelcreador" className="dropdown-item">
                          <i className="bi bi-speedometer2 me-2"></i>
                          Panel de Creador
                        </Link>
                      </li>
                    )}
                    
                    {(user.role === 'viewer' || user.role === 'streamer') && (
                      <li><hr className="dropdown-divider" /></li>
                    )}
                    
                    {/* Opción: Cerrar Sesión */}
                    <li>
                      <button 
                        onClick={logout} 
                        className="dropdown-item text-danger"
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </div>
                
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