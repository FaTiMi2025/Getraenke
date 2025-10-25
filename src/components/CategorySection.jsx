import React from 'react';
import DrinkItem from './DrinkItem';
import { categoryEmojis } from '../data/drinks';

function CategorySection({ category, drinks }) {
  return (
    <div className="category-section">
      <h2 className="category-title">
        {categoryEmojis[category]} {category}
      </h2>
      <div className="drinks-list">
        {drinks.map(drink => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
