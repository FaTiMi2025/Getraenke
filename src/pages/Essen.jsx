import { food, foodCategories, foodCategoryEmojis } from '../data/food';

function Essen() {
  const foodByCategory = foodCategories.reduce((acc, category) => {
    acc[category] = food.filter(item => item.category === category);
    return acc;
  }, {});

  return (
    <div className="app">
      <header className="app-header">
        <div className="party-decorations">
          <span className="balloon">🎈</span>
          <span className="balloon">🎉</span>
          <span className="balloon">🎊</span>
        </div>
        <h1>🍽️ Geburtstagsparty Speisekarte 🥳</h1>
        <p className="party-subtitle">Guten Appetit!</p>
        <div className="party-decorations">
          <span className="balloon">🎊</span>
          <span className="balloon">🎉</span>
          <span className="balloon">🎈</span>
        </div>
      </header>

      <main className="main-content">
        {foodCategories.map(category => (
          <section key={category} className="category-section">
            <h2 className="category-title">{foodCategoryEmojis[category]} {category === 'Hauptgericht' ? 'Hauptgerichte' : category === 'Soße' ? 'Soßen' : category + 'n'}</h2>
            <div className="drinks-list">
              {foodByCategory[category].map(item => (
                <div key={item.id} className="drink-item">
                  <span className="drink-name">{item.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Essen;
