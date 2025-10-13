import { useState } from 'react';

// Interface para un streamer
interface Streamer {
  id: number;
  name: string;
  avatar: string;
  isLive: boolean;
}

// Interface para las props del Sidebar
interface SidebarProps {
  streamers: Streamer[];
}

function Sidebar({ streamers }: SidebarProps) {
  // Estado local para controlar expansión/colapso
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
      {/* Encabezado con botón toggle */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Canales</h5>
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {/* Lista de streamers (mostrar solo si está expandido) */}
      {isExpanded && (
        <ul className="list-unstyled">
          {streamers.map((streamer) => (
            <li key={streamer.id} className="mb-3 d-flex align-items-center">
              {/* Avatar con indicador de estado */}
              <div className="position-relative me-2">
                <img
                  src={streamer.avatar}
                  alt={streamer.name}
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
                {streamer.isLive && (
                  <span
                    className="position-absolute bottom-0 end-0 bg-danger border border-dark rounded-circle"
                    style={{ width: '12px', height: '12px' }}
                  ></span>
                )}
              </div>
              
              {/* Nombre del streamer */}
              <div>
                <p className="mb-0 small fw-bold">{streamer.name}</p>
                {streamer.isLive && (
                  <span className="badge bg-danger" style={{ fontSize: '0.65rem' }}>
                    LIVE
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;