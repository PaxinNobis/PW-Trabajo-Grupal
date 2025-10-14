import StreamCard from './Streamcard'

// Interface para un stream individual
interface Stream {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  viewers: number;
}

// Interface para las props del Feed
interface FeedProps {
  streams: Stream[];
}

function Feed({ streams }: FeedProps) {
  return (
    <div className="container my-4">
      <h2 className="mb-3 fw-bold">Streams Recomendados</h2>
      
      {/* Grilla responsive */}
      <div className="row">
        {/* Renderizado declarativo con map */}
        {streams.map((stream) => (
          <StreamCard
            key={stream.id}
            id={stream.id}
            thumbnail={stream.thumbnail}
            title={stream.title}
            channel={stream.channel}
            viewers={stream.viewers}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;