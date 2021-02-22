import logo from './logo.svg';
import './App.css';

function App() {
  const Header = () => {
    return(
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    );
  }

  const Player = () => {
    return(
      <div className="player">
        <span className ="player-name">
          Adams
        </span>
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <span className="counter-score">35</span>
          <button className="counter-action increment"> + </button>

        </div>
      </div>
    )
  }
}

export default App;
