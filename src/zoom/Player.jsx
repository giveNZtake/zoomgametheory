import React, { useContext } from "react";
import GameContext from "../context/GameContext";
import { convertCurrency } from "../utils";

const Player = ({ player }) => {
 const { playerBalances, setPlayerBalances, currency } = useContext(GameContext);

  const handleTake = () => {
    const newBalances = { ...playerBalances };
    newBalances[player.id] += player.currentAmount;
    setPlayerBalances(newBalances);
  };

  return (
    <div className="player">
      <h2>{player.name}</h2>
      <p>
        Balance: {currency === "USD" ? "$" : "₹"}{" "}
        {convertCurrency(playerBalances[player.id], "USD", currency).toFixed(2)}
      </p>
      <button onClick={handleTake}>TAKE</button>
    </div>
  );
};

export default Player;