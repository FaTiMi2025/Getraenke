import React, { useEffect, useState } from 'react';
import '../styles/Confetti.css';

function Confetti({ trigger }) {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    if (trigger) {
      const pieces = [];
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          backgroundColor: getRandomColor()
        });
      }
      setConfettiPieces(pieces);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfettiPieces([]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [trigger]);

  const getRandomColor = () => {
    const colors = [
      '#f093fb',
      '#667eea',
      '#764ba2',
      '#ffeaa7',
      '#fdcb6e',
      '#fd79a8',
      '#74b9ff',
      '#0984e3',
      '#6c5ce7',
      '#00b894',
      '#00cec9',
      '#a29bfe'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            backgroundColor: piece.backgroundColor
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
