import React, { useState } from 'react';
import CategorySection from './components/CategorySection';
import { drinks, categories } from './data/drinks';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrinks = drinks.filter(drink => {
    const matchesCategory = selectedCategory === 'Alle' || drink.category === selectedCategory;
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const drinksByCategory = selectedCategory === 'Alle'
    ? categories.reduce((acc, category) => {
        acc[category] = filteredDrinks.filter(drink => drink.category === category);
        return acc;
      }, {})
    : { [selectedCategory]: filteredDrinks };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Digitale Getränkekarte</h1>
      </header>

      <div className="controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Getränk suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <button
            className={selectedCategory === 'Alle' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('Alle')}
          >
            Alle
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="main-content">
        {Object.entries(drinksByCategory).map(([category, categoryDrinks]) => {
          if (categoryDrinks.length === 0) return null;
          return (
            <CategorySection
              key={category}
              category={category}
              drinks={categoryDrinks}
            />
          );
        })}
        {filteredDrinks.length === 0 && (
          <div className="no-results">
            Keine Getränke gefunden.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
