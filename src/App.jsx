import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto'; // Asegúrate que esto exista

import { supabase } from './supabase'; // Asegúrate de tener este archivo configurado
import Menu from './components/menu';

import Aleatorio from './components/aleatorios';
import Detalle from './components/detalle';
import Favoritos from './components/favoritos';
import Listar from './components/listar';
import Original from './components/original';
import Usuario from './components/usuario';
import Login from './components/login'; // Crea este componente si no existe

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });

    // Cleanup del listener al desmontar
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}
        <Routes>
          <Route path="/" element={usuario ? <Listar /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorio /> : <Navigate to="/login" />} />
          <Route path="/detalle/:name" element={usuario ? <Detalle /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/listar" element={usuario ? <Listar /> : <Navigate to="/login" />} />
          <Route path="/original" element={usuario ? <Original /> : <Navigate to="/login" />} />
          <Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
