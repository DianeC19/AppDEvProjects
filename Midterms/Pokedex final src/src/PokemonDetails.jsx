import React from 'react';

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="pokemon-details">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="details-header">
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name}
            className="detail-image"
          />
          <h2 className="detail-name">{pokemon.name}</h2>
        </div>

        <div className="details-body">
          <section className="types-section">
            <h3>Types</h3>
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
          </section>

          <section className="stats-section">
            <h3>Stats</h3>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="stat-row">
                <span className="stat-name">{stat.stat.name}</span>
                <div className="stat-bar">
                  <div 
                    className="stat-fill"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  />
                </div>
                <span className="stat-value">{stat.base_stat}</span>
              </div>
            ))}
          </section>

          <section className="abilities-section">
            <h3>Abilities</h3>
            <div className="abilities-list">
              {pokemon.abilities.map(ability => (
                <span key={ability.ability.name} className="ability-tag">
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </section>

          <section className="metrics-section">
            <div className="metric">
              <h3>Height</h3>
              <p>{pokemon.height / 10} m</p>
            </div>
            <div className="metric">
              <h3>Weight</h3>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;