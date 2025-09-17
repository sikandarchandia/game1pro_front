import { AviatorProvider } from "../context/AviatorProvider";
import BetControls from "./BetControls";
import GameArea from "./GameArea";
import HeaderStats from "./HeaderStats";
import HistoryTable from "./HistoryTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Aviator.css";

const AviatorPage = () => {
  return (
    <AviatorProvider>
      <div className="aviator-page">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: 9999 }}
        />
        <HeaderStats />
        <div className="aviator-container">
          <div className="aviator-grid">
            <div className="aviator-main-content aviator-order-1">
              <GameArea />
              <div className="aviator-bet-controls-grid">
                <BetControls compact side="left" />
                <BetControls compact side="right" />
              </div>
              <HistoryTable />
            </div>
            <div className="aviator-sidebar aviator-order-2">
              <div className="sidebar-content">
                <h3>🎮 Game Info</h3>
                <div className="game-rules">
                  <h4>How to Play:</h4>
                  <ul>
                    <li>🎯 Place your bet during the 15-second betting window</li>
                    <li>🚀 Watch the plane fly and multiplier increase</li>
                    <li>💰 Cash out before the plane crashes to win</li>
                    <li>💥 If you don't cash out in time, you lose your bet</li>
                  </ul>
                  <h4>Features:</h4>
                  <ul>
                    <li>⚡ Real-time multiplayer game</li>
                    <li>🔄 Autoplay functionality</li>
                    <li>📊 Live statistics and history</li>
                    <li>🎲 Provably fair results</li>
                  </ul>
                  <h4>Tips:</h4>
                  <ul>
                    <li>💡 Start with smaller bets to learn</li>
                    <li>🎯 Set a target multiplier and stick to it</li>
                    <li>⚖️ Manage your bankroll wisely</li>
                    <li>🔄 Use autoplay for consistent strategy</li>
                  </ul>
                </div>
                <div className="quick-stats">
                  <h4>Quick Stats</h4>
                  <div className="stat-item">
                    <span>Min Bet:</span>
                    <span>5 PKR</span>
                  </div>
                  <div className="stat-item">
                    <span>Max Bet:</span>
                    <span>50,000 PKR</span>
                  </div>
                  <div className="stat-item">
                    <span>Betting Time:</span>
                    <span>15 seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AviatorProvider>
  );
};

export default AviatorPage;
