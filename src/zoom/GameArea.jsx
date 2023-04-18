import React, { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import Player from "./Player";
import FinalRound from "./FinalRound";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const GameArea = () => {
 const {
    players,
    currency,
    currentRound,
    playersConnected,
    setPlayersConnected,
  } = useContext(GameContext);
  const [currentAmount, setCurrentAmount] = useState(0);
  const increment = currency === "USD" ? 0.01 : 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAmount((prevAmount) => {
        const newAmount = prevAmount + increment;
        if (newAmount >= (currency === "USD" ? 2.5 : 80)) {
          clearInterval(timer);
        }
        return newAmount;
      });
    }, (currency === "USD" ? 60 : 1.875) * 1000);

    return () => clearInterval(timer);
  }, [currency, increment]);

  useEffect(() => {
    // Simulate player exit after 5 seconds
    const playerExitTimer = setTimeout(() => {
      setPlayersConnected(false);
    }, 5000);

    return () => clearTimeout(playerExitTimer);
  }, [setPlayersConnected]);

  if (!playersConnected) {
    return (
      <div>
        <h2>One or both players have left the game.</h2>
        <p>You can continue the game or end it early.</p>
      </div>
    );
  }
  
 const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="game-area">
      <div className="money-display">
        {currency === "USD" ? "$" : "₹"} {currentAmount.toFixed(2)}
      </div>
      {currentRound === 1 && (
        <CountdownCircleTimer
          isPlaying
          duration={150}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => {
            setCurrentRound(2);
            return [false, 0];
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
      {currentRound === 2 && (
        <CountdownCircleTimer
          isPlaying
          duration={15}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => {
            setCurrentRound(3);
            return [false, 0];
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
      {currentRound === 3 &&
        players.map((player, index) => (
          <FinalRound key={index} player={{ ...player }} />
        ))}
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default GameArea;