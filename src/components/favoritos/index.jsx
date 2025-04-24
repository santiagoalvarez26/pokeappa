import './style.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const almacenados = localStorage.getItem("favoritosPokemon");
    if (almacenados) {
      setFavoritos(JSON.parse(almacenados));
    }
  }, []);

  return (
    <section className="c-lista">
      <h2>Pokémon Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No hay favoritos aún.</p>
      ) : (
        favoritos.map((pokemon, index) => {
          const id = pokemon.url.split("/")[6];
          return (
            <div 
              className="c-lista-pokemon"
              key={index}
              onClick={() => navigate(`/detalle/${pokemon.name}`)}
            >
              <p>{id}</p>
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                alt={pokemon.name}
                width="200"
                height="200"
              />
              <p>{pokemon.name}</p>
            </div>
          );
        })
      )}
    </section>
  );
}

export default Favoritos;
// Este componente muestra los Pokémon favoritos del usuario.
// Utiliza el localStorage para almacenar y recuperar los Pokémon favoritos.
// Al hacer clic en un Pokémon, redirige a la página de detalles del Pokémon seleccionado.
// Se utiliza el hook useEffect para cargar los favoritos al montar el componente.
// Se utiliza el hook useState para manejar el estado de los favoritos.