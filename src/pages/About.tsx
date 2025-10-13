export const About = () => (
  <div className="container mt-5 mb-5">
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10">
        <h1 className="display-4 fw-bold mb-4">📖 Sobre Nosotros</h1>
        
        <div className="card mb-4">
          <div className="card-body p-4">
            <h2 className="h4 mb-3">Nuestra Misión</h2>
            <p>
              StreamPlatform es la plataforma líder de streaming en vivo que conecta a
              creadores de contenido con audiencias globales. Nuestra misión es democratizar
              la transmisión en vivo y hacer que sea accesible para todos.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body p-4">
            <h2 className="h4 mb-3">¿Qué Ofrecemos?</h2>
            <ul>
              <li>Streaming en alta calidad con baja latencia</li>
              <li>Herramientas para creadores de contenido</li>
              <li>Sistema de recompensas para espectadores</li>
              <li>Comunidad activa y moderada</li>
              <li>Soporte 24/7 para todos los usuarios</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4 bg-primary text-white">
          <div className="card-body p-4 text-center">
            <h2 className="h4 mb-3">Únete a Nuestra Comunidad</h2>
            <p>Miles de streamers y espectadores ya forman parte de StreamPlatform</p>
            <a href="/signup" className="btn btn-light btn-lg mt-2">
              Registrarse Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);