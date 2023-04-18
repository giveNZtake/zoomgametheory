import React from "react";
import { GameProvider } from "../context/GameContext";
import GameArea from "./GameArea";

const ZoomPlugin = () => {
  return (
    <GameProvider>
      <GameArea />
    </GameProvider>
  );
};

export default ZoomPlugin;