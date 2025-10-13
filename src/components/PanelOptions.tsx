import { useState } from 'react';
import type React from 'react';

interface PanelControlProps {
  opciones: string[];
  onSeleccionar: (opcion: string) => void;
}

const PanelOptions: React.FC<PanelControlProps> = (props) => {
  const [seleccionado, setSeleccionado] = useState(props.opciones[0]);

  const handleClick = (opcion: string) => {
    setSeleccionado(opcion);
    props.onSeleccionar(opcion);
  };

  return (
    <div className="col-2 vh-100 p-3 border-end" style={{minHeight: '100vh'}}>
      <h5 className="mb-4">Panel de Control</h5>
      <div className="list-group">
        {props.opciones.map((opcion) => (
          <button
            key={opcion}
            className={`list-group-item list-group-item-action ${seleccionado === opcion ? 'active' : ''}`}
            onClick={() => handleClick(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PanelOptions;
