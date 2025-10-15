import Hero from '../components/Hero';
import Feed from '../components/Feed';

const Home = () => {
  // Datos mock (movidos desde App.tsx)
  const heroSlides = [
    {
      id: 1,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
    {
      id: 2,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
    {
      id: 3,
      image: '',
      title: 'Titulo',
      channel: 'Canal 1'
    },
  ];

  const recommendedStreams = [
    {
      id: 1,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 2,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 3,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 4,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 5,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 6,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 7,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
    {
      id: 8,
      thumbnail: 'Ref',
      title: 'Titulo',
      channel: 'Canal',
      viewers: 1
    },
  ];

  return (
    <>
      <Hero slides={heroSlides} />
      <Feed streams={recommendedStreams} />
    </>
  );
};

export default Home;