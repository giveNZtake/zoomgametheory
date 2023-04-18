import React, { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";

const FinalRound = ({ player }) => {
  const { playerBalances, setPlayerBalances } = useContext(GameContext);
  const [choice, setChoice] = useState(null);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        if (choice === null) {
          setChoice("STEAL");
        }
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, choice]);

  const handleShare = () => {
    setChoice("SHARE");
  };

  const handleSteal = () => {
    setChoice("STEAL");
  };

  return (
    <div className="player">
      <h2>{player.name}</h2>
      <p>Balance: {playerBalances[player.id]}</p>
      <button onClick={handleShare} style={{ backgroundColor: choice === "SHARE" ? "green" : "white" }}>
        SHARE
      </button>
      <button onClick={handleSteal} style={{ backgroundColor: choice === "STEAL" ? "red" : "white" }}>
        STEAL
      </button>
    </div>
  );
};

export default FinalRound;