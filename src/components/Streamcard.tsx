import { Link } from 'react-router-dom';

// Interface para las props de una tarjeta
interface StreamCardProps {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  viewers: number;
}

function StreamCard({ id, thumbnail, title, channel, viewers }: StreamCardProps) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card bg-dark text-white h-100">
        {/* Miniatura del stream */}
        <img
          src={thumbnail}
          className="card-img-top"
          alt={title}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        
        {/* Información del stream */}
        <div className="card-body">
          <h6 className="card-title fw-bold">{title}</h6>
          <p className="card-text text-muted mb-1">{channel}</p>
          <p className="card-text">
            <span className="badge bg-danger">{viewers.toLocaleString()} viewers</span>
          </p>
          <Link to={`/streaming/${id}`} className="btn btn-primary btn-sm w-100">
            Ver Stream
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StreamCard;