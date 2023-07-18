import logo from './chibi.gif';
import './App.css';
import Joke from "./components/Joke";
import JokeCs from "./components/JokeCs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "App-name">Giggle JS ^~^</h1>
        <h3>Joke Generator Using React and Joke API</h3>
        <img src={logo} className="App-logo" alt="logo" />
          <div className = "Joke-button">
            <div className = "button">
              <Joke />
            </div>
            <div className = "button">
              <JokeCs />
            </div>
            
          </div>
      </header>
    </div>
  );
}

export default App;
