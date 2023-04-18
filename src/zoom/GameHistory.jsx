import React, { useContext } from "react";
import GameContext from "../context/GameContext";

const GameHistory = () => {
  const { gameResults } = useContext(GameContext);

  return (
    <div className="game-history">
      <h2>Game History</h2>
      {gameResults.length > 0 ? (
        <ul>
          {gameResults.map((result, index) => (
            <li key={index}>{JSON.stringify(result)}</li>
          ))}
        </ul>
      ) : (
        <p>No game history available.</p>
      )}
    </div>
  );
};

export default GameHistory;