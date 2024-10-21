import React, { useState } from 'react';

const Filters = ({ onTypeFilter, onRegionFilter, onSearch }) => {
  const types = [
    'all', 'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  const regions = [
    'all', 'kanto', 'johto', 'hoenn', 'sinnoh', 
    'unova', 'kalos', 'alola', 'galar'
  ];

  return (
    <div className="filters-container">
      
      <select 
        onChange={(e) => onTypeFilter(e.target.value === 'all' ? '' : e.target.value)}
        className="filter-select"
        defaultValue="" // Ensure "Type" shows initially
      >
        <option value="" disabled>Type</option> 
        {types.map(type => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      
      <select 
        onChange={(e) => onRegionFilter(e.target.value === 'all' ? '' : e.target.value)}
        className="filter-select"
        defaultValue=""
      >
        <option value="" disabled>Region</option> 
        {regions.map(region => (
          <option key={region} value={region}>
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
