import { useState } from 'react';
import PanelHeader from '../components/PanelHeader';
import PanelStream from '../components/PanelStream';
import PanelOptions from '../components/PanelOptions';
import Videos from './Videos';
import Analiticas from './Analiticas';
import Configuracion from './Configuracion';

const PanelControl: React.FC = () => {
  type Stream = { id: number; title: string; viewers: number; status: 'live' | 'idle' | 'offline' };
  const mockStreams: Stream[] = [
    { id: 1, title: 'Mi stream en vivo', viewers: 120, status: 'live' },
    { id: 2, title: 'Prueba de audio', viewers: 8, status: 'idle' },
  ];

  const [seccionActiva, setSeccionActiva] = useState('Stream');

  let contenidoCentral = (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Panel de Control - Stream</h5>
        <p className="text-muted">Controles y vista previa del stream activo.</p>
      </div>
    </div>
  );

  if (seccionActiva === 'Stream') contenidoCentral = (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Vista previa del Stream</h5>
        <p className="text-muted">Aquí aparecerá la vista previa y controles del stream.</p>
      </div>
    </div>
  );
  if (seccionActiva === 'Videos') contenidoCentral = <Videos />;
  if (seccionActiva === 'Estadísticas') contenidoCentral = <Analiticas />;
  if (seccionActiva === 'Configuración') contenidoCentral = <Configuracion />;

  return (
    <div className="container mt-4">
      <PanelHeader />

      <div className="row mt-3">
        <PanelOptions
          opciones={["Stream", "Videos", "Estadísticas", "Configuración"]}
          onSeleccionar={(o) => setSeccionActiva(o)}
        />

        <div className="col-8">
          {contenidoCentral}
        </div>

        <div className="col-2">
          <div className="list-group">
            {mockStreams.map(s => (
              <PanelStream key={s.id} stream={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelControl;
