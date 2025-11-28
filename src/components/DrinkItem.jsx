import { useState } from 'react';
import { createPortal } from 'react-dom';

function DrinkItem({ drink }) {
  const [confetti, setConfetti] = useState([]);

  const createConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const colors = ['#f093fb', '#667eea', '#ffeaa7', '#fd79a8', '#74b9ff', '#00b894', '#6c5ce7'];
    const pieces = [];

    for (let i = 0; i < 24; i++) {
      const isLeft = i < 12;
      const angleRad = (isLeft ? (150 + Math.random() * 60) : (330 + Math.random() * 60)) * (Math.PI / 180);
      const velocity = 80 + Math.random() * 60;

      pieces.push({
        id: Date.now() + i,
        startX: centerX,
        startY: centerY,
        endX: Math.cos(angleRad) * velocity,
        endY: Math.sin(angleRad) * velocity + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 720,
        size: 6 + Math.random() * 6,
        duration: 0.5 + Math.random() * 0.3
      });
    }

    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 1000);
  };

  const confettiPortal = confetti.length > 0 && createPortal(
    <>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="click-confetti"
          style={{
            '--start-x': `${piece.startX}px`,
            '--start-y': `${piece.startY}px`,
            '--end-x': `${piece.endX}px`,
            '--end-y': `${piece.endY}px`,
            '--rotation': `${piece.rotation}deg`,
            '--size': `${piece.size}px`,
            '--duration': `${piece.duration}s`,
            backgroundColor: piece.color
          }}
        />
      ))}
    </>,
    document.body
  );

  return (
    <>
      <div className="drink-item" onClick={createConfetti}>
        <div className="drink-name">{drink.name}</div>
        {drink.alcohol && (
          <div className="drink-alcohol">{drink.alcohol}% Vol.</div>
        )}
      </div>
      {confettiPortal}
    </>
  );
}

export default DrinkItem;
