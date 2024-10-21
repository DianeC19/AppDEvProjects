import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div className="type-tags">
        {pokemon.types.map(type => (
          <span 
            key={type.type.name}
            className={`type-tag ${type.type.name}`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;