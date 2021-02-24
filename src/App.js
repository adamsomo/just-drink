import './imports.js';
import logo from "./images/bottomsupLogo.png"
import navBar from './components/navbar';
import NavBar from './components/navbar';

const title = <h1 className="Title">Bottoms Up!</h1>
const players = <h1 className="players">Player</h1>

function App() {
  return(
  <div>
  <div><img src={logo} className="logoImage" alt="logo" /></div>
  <NavBar title="Bottoms Up!" drinksNumber={3} />
  </div>
  );

}




export default App;
