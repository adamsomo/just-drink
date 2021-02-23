import './imports.js';
import navBar from './components/navbar';
import NavBar from './components/navbar';

const title = <h1 className="Title">Bottoms Up!</h1>
const players = <h1 className="players">Player</h1>

function App() {
  return(
  <div>
  <NavBar title="Bottoms Up!" drinksNumber={3} />
  </div>
  );

}




export default App;
