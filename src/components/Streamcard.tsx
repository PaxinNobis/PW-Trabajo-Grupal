import { Link } from 'react-router-dom';
import './Streamcard.css';

// Interface para las props de una tarjeta
interface StreamCardProps {
    id: number;
    thumbnail: string;
    title: string;
    channel: string;
    viewers: number;
}

const StreamCard = (props: StreamCardProps) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card bg-dark text-white h-100">
                {/* Miniatura del stream */}
                <img
                src={props.thumbnail}
                className="card-img-top stream-card-thumbnail"
                alt={props.title}
                />
                
                {/* Información del stream */}
                <div className="card-body">
                    <h6 className="card-title fw-bold">{props.title}</h6>
                    <p className="card-text text-muted mb-1">{props.channel}</p>
                    <p className="card-text">
                        <span className="badge bg-danger">{props.viewers.toLocaleString()} viewers</span>
                    </p>
                    <Link to={`/streaming/${props.id}`} className="btn btn-primary btn-sm w-100">
                        Ver Stream
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StreamCard;