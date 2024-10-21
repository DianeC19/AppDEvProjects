import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import SearchBar from './Searchbar';
import Filters from './Filters';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
      const data = await response.json();
      
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      
      setPokemons(pokemonDetails);
      setFilteredPokemons(pokemonDetails);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(term, selectedType, selectedRegion);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    applyFilters(searchTerm, type, selectedRegion);
  };

  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
    applyFilters(searchTerm, selectedType, region);
  };

  const applyFilters = (search, type, region) => {
    let filtered = pokemons;

    if (search) {
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter(pokemon => 
        pokemon.types.some(t => t.type.name === type)
      );
    }

    if (region) {
      const regionRanges = {
        kanto: [1, 151],
        johto: [152, 251],
        hoenn: [252, 386],
        sinnoh: [387, 493],
        unova: [494, 649],
        kalos: [650, 721],
        alola: [722, 809],
        galar: [810, 898]
      };
      
      const range = regionRanges[region];
      filtered = filtered.filter(pokemon => 
        pokemon.id >= range[0] && pokemon.id <= range[1]
      );
    }

    setFilteredPokemons(filtered);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Pokédex</h1>
      </header>
      <div className="controls">
        <SearchBar onSearch={handleSearch} />
        <Filters 
          onTypeFilter={handleTypeFilter} 
          onRegionFilter={handleRegionFilter} 
        />
      </div>
      <main className="main-content">
        <PokemonList 
          pokemons={filteredPokemons} 
          onSelectPokemon={setSelectedPokemon} 
          loading={loading}
        />
        {selectedPokemon && (
          <PokemonDetails 
            pokemon={selectedPokemon} 
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;