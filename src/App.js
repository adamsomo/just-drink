import logo from './logo.svg';
import './App.css';
import './semantic/dist/semantic.css';
import navBar from './components/navbar';

const title = <h1 className="Title">Bottoms Up!</h1>
const players = <h1 className="players">Player</h1>

function App() {
  return(
  <div>{navBar}</div>
  );

}




export default App;
