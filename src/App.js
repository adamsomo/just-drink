import logo from './logo.svg';
import './App.css';
import './semantic/dist/semantic.css';

const navBar = 'nav';
const title = <h1 className="Title">Bottoms Up!</h1>
const players = <h1 className="players">Player</h1>

function App() {
  return(
  <div className={navBar}>
    <span>{title}</span>
  </div>

  );

}




export default App;
