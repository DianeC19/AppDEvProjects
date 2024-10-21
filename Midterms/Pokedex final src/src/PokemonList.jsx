import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, onSelectPokemon, loading }) => {
  if (loading) {
    return <div className="loading">Loading Pokémon...</div>;
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map(pokemon => (
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}
    </div>
  );
};

export default PokemonList;