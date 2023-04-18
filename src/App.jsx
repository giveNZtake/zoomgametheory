import "./App.css";
import { GameProvider } from "./context/GameContext.jsx";
import GameSetup from "./zoom/GameSetup.jsx";
import GameArea from "./zoom/GameArea.jsx";
import GameHistory from "./zoom/GameHistory.jsx";
import CurrencySelector from "./zoom/CurrencySelector.jsx";
import ZoomIntegration from "./zoom/ZoomIntegration.jsx";

function App() {
  return (
    <GameProvider>
      <div className="App">
        <header className="App-header">
          <h1>Zoom Game</h1>
        </header>
        <CurrencySelector />
        <ZoomIntegration />
        <GameSetup />
        <GameArea />
        <GameHistory />
        <Leaderboard />
      </div>
    </GameProvider>
  );
}

export default App;