import { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playerBalances, setPlayerBalances] = useState({});
  const [currency, setCurrency] = useState("USD");
  const [currentRound, setCurrentRound] = useState(1);
  const [playersConnected, setPlayersConnected] = useState(true);
  const [gameResults, setGameResults] = useState([]);

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        playerBalances,
        setPlayerBalances,
        currency,
        setCurrency,
        currentRound,
        setCurrentRound,
        playersConnected,
        setPlayersConnected,
        gameResults,
        setGameResults,

      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;