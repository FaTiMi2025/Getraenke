import React from 'react';

function DrinkItem({ drink }) {
  return (
    <div className="drink-item">
      <div className="drink-name">{drink.name}</div>
      {drink.alcohol && (
        <div className="drink-alcohol">{drink.alcohol}% Vol.</div>
      )}
    </div>
  );
}

export default DrinkItem;
