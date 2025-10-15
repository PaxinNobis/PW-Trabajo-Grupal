// routes/AppRouter.tsx
// Configuración de todas las rutas de la aplicación

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/NavBar/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';
import TyC from '../pages/TyC';
import Nosotros from '../pages/Nosotros';
import PanelControl from '../pages/PanelControl';
import ConvertirseCreador from '../pages/ConvertirseCreador';
import Streaming from '../pages/Streaming';
import PackMonedas from '../pages/PackMonedas';
import PasarelaPago from '../pages/PasarelaPago';
import GestionRegalos from '../pages/GestionRegalos';

/**
 * Router principal de la aplicación
 * Envuelve todo con AuthProvider y BrowserRouter
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          {/* Navbar visible en todas las páginas */}
          <Header></Header>
          
          {/* Contenedor principal para las rutas */}
          <main className="flex-grow-1">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Req 08 */}
            <Route path="/TyC" element={<TyC />} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/PackMonedas" element={<PackMonedas/>} />
            <Route path="/PasarelaPago" element={<PasarelaPago/>}/>

            
            
            {/* Rutas protegidas */}
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route
              path="/panelcreador"
              element={
                <PrivateRoute>
                  <PanelControl />
                </PrivateRoute>
              }
            />
            <Route
              path="/convertirse-creador"
              element={
                <PrivateRoute>
                  <ConvertirseCreador />
                </PrivateRoute>
              }
            />
            <Route
              path="/gestion-regalos"
              element={
                <PrivateRoute>
                  <GestionRegalos />
                </PrivateRoute>
              }
            />
            
            {/* Ruta de visualización de streaming */}
            <Route path="/streaming/:streamId" element={<Streaming />} />
            
            {/* Ruta 404 - redirige al home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer visible en todas las páginas */}
        <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
