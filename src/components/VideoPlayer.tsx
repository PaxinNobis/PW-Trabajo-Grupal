 

type Props = {
  src: string;
  title?: string;
};

const VideoPlayer: React.FC<Props> = ({ src, title }) => {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        src={src}
        title={title || 'Video'}
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
