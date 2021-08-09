import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Punk API
        </h1>
        <h3>
          Search your favourite beer 🍻
        </h3>
      <SearchBar/>
      </header>
    </div>
  );
}

export default App;
