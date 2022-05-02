import "./App.css";
import { NavBar } from "./components"; //now gathers all components in the directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
