import './App.css';
import TopNav from './components/TopNav';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <TopNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under construction
        </p>
      </header>
    </div>
  );
}

export default App;
